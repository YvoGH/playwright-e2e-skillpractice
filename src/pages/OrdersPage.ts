import { Page, Expect, Locator } from "@playwright/test";

export class OrdersPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async anulujZamowienie(numerZamowienia: string){
        await this.page.getByRole("row").filter({ hasText: numerZamowienia}).getByRole("button", {name: 'Anuluj'}).click()}
    }