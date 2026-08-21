import { test, expect, Page, Locator } from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly hasloInput: Locator;
    readonly zalogujButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Wprowadź e-mail');
        this.hasloInput = page.getByPlaceholder('Wprowadź hasło');
        this.zalogujButton = page.getByRole('button', { name: 'Zaloguj się'});

    }
    async zalogujUzytkownika(email: string, haslo: string){
        await this.emailInput.fill(email);
        await this.hasloInput.fill(haslo);
        await this.zalogujButton.click();
    }
}
test('Logowanie z POM', async ({ page }) => {
    await page.goto('https://app.example.com/login');
    const logowanie = new LoginPage(page);
    await logowanie.zalogujUzytkownika('qa@example.com', 'Haslo123!');
    await expect(page).toHaveURL('https://app.example.com/dashboard');
});