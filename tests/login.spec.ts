import { test, expect } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";

test('Logowanie z POM', async ({ page }) => {
    await page.goto('https://app.example.com/login');
    const logowanie = new LoginPage(page);
    await logowanie.zalogujUzytkownika('qa@example.com', 'Haslo123!');
    await expect(page).toHaveURL('https://app.example.com/dashboard');
});