import {Page, Locator, Expect, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly komunikatBledu: Locator;
    readonly emailInput: Locator;
    readonly hasloInput: Locator;
    readonly zalogujButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Wprowadź e-mail');
        this.hasloInput = page.getByPlaceholder('Wprowadź hasło');
        this.zalogujButton = page.getByRole('button', {name: 'Zaloguj się'});
        this.komunikatBledu = page.getByRole('alert');
    }
    async zalogujUzytkownika(email: string, haslo: string){
        await this.emailInput.fill(email);
        await this.hasloInput.fill(haslo);
        await this.zalogujButton.click();
    }
    async sprawdzKomunikatBledu(tekstBledu: string) {
        await expect(this.komunikatBledu).toContainText(tekstBledu);
    }
}
