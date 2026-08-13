import { test, expect } from '@playwright/test';

test.describe('Moduł rejestracji', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.example.com/register');
    });

    test('Rejestracja poprawnymi danymi', async ({ page }) => {
        // TODO: Miejsce na implementację pozytywnej ścieżki
    });

    test('Rejestracja z pustym polem email', async ({ page }) => {

        await page.getByPlaceholder('Wprowadź hasło').fill('Bezpieczne123!');

        const regulaminCheckbox = page.getByRole('checkbox', { name: 'Akceptuję regulamin' });
        await regulaminCheckbox.check();

        await expect(regulaminCheckbox).toBeChecked();

        const rejestracjaButton = page.getByRole('button', { name: 'Zarejestruj się' });

        await expect(rejestracjaButton).toBeVisible();

        await expect(rejestracjaButton).toBeDisabled();
    });

    test('Rejestracja z pustym formularzem - walidacja błędów', async ({ page }) => {

        await page.getByRole('button', { name: 'Zarejestruj się'}).click();
        await expect.soft(page.getByText('Pole e-mail jest wymagane')).toBeVisible();
        await expect.soft(page.getByText('Hasło musi mieć minimum 8 znaków')).toBeVisible();
        await expect.soft(page.getByText('Zgoda na regulamin jest obowiązkowa')).toBeVisible();
    });
});

test('Zmiana hasła użytkownika', async ({ page }) => {
    await page.goto('https://app.example.com/settings');
    const passwordModal = page.getByRole('dialog', { name: 'Zmień hasło'});
    await passwordModal.getByPlaceholder('Nowe hasło').fill('SilneHaslo99!');
    await passwordModal.getByRole('button', { name: 'Zapisz zmiany'}).click();
    await expect(passwordModal).not.toBeVisible();
});