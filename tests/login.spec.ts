import { test, expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";

let logowanie: LoginPage;
test.beforeEach(async ({ page }) => {
   logowanie = new LoginPage(page);
   await page.goto('https://app.example.com/login');
});

const daneLogowania = [
    { email: 'qa@example.com', haslo: 'Haslo123!', oczekiwanyUrl: 'https://app.example.com/dashboard'},
    { email: 'zly@example.com', haslo: 'Haslo123!', oczekiwanyUrl: 'https://app.example.com/login'},
    { email: 'qa@example.com', haslo: 'ZleHaslo!', oczekiwanyUrl: 'https://app.example.com/login'},
];

for (const dane of daneLogowania) {
    test(`Logowanie dla użytkownika: ${dane.email} i hasła: ${dane.haslo}`, async ({page}) => {
        await logowanie.zalogujUzytkownika(dane.email, dane.haslo);
        await expect(page).toHaveURL(dane.oczekiwanyUrl);
    });
}

test('Nieudane logowanie - niepoprawne hasło', async ({ page }) => {
    await logowanie.zalogujUzytkownika('qa@example.com', 'ZleHaslo123');
    await logowanie.sprawdzKomunikatBledu('Nieprawidłowy login lub hasło');
});
