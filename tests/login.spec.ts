import { test, expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";

const daneLogowania = [
    { email: 'qa@example.com', haslo: 'Haslo123!', oczekiwanyUrl: 'https://app.example.com/dashboard'},
    { email: 'zly@example.com', haslo: 'Haslo123!', oczekiwanyUrl: 'https://app.example.com/login'},
    { email: 'qa@example.com', haslo: 'ZleHaslo!', oczekiwanyUrl: 'https://app.example.com/login'},
];
for (const dane of daneLogowania) {
    test(`Logowanie dla użytkownika: ${dane.email} i hasła: ${dane.haslo}`, async ({page}) => {
        await page.goto('https://app.example.com/login');
        const logowanie = new LoginPage(page);
        await logowanie.zalogujUzytkownika(dane.email, dane.haslo);
        await expect(page).toHaveURL(dane.oczekiwanyUrl);
    });
}
