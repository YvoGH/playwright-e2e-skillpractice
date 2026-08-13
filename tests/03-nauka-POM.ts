import { test, expect, Page } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async zalogujUzytkownika(email: string, haslo: string){
        await this.page.getByPlaceholder('Wprowadź e-mail').fill(email);
        await this.page.getByPlaceholder('Wprowadź hasło').fill(haslo);
        await this.page.getByRole('button', { name: 'Zaloguj się'}).click();
    }
}

test('Logowanie z POM', async ({ page }) => {
    await page.goto('https://app.example.com/login');
    const logowanie = new LoginPage(page);
    await logowanie.zalogujUzytkownika('qa@example.com', 'Haslo123!');
    await expect(page).toHaveURL('https://app.example.com/dashboard');
});

test('Pomyślne logowanie użytkownika', async ({ page }) => {
    await page.goto('https://app.example.com/login');
    await page.getByPlaceholder('Wprowadź e-mail').fill('qa@example.com');
    await page.getByPlaceholder('Wprowadź hasło').fill('Haslo123!');
    await page.getByRole('button', { name: 'Zaloguj się' }).click();
    await expect(page).toHaveURL('https://app.example.com/dashboard');

    const headingMessage = page.getByRole('heading', { name: 'Witaj w panelu'});
    await expect(headingMessage).toBeVisible();
});