import {test, expect} from "@playwright/test";

test('Dodanie produktu do koszyka', async ({ page }) => {
    await page.goto('https://app.example.com/products');
    const cartPromise = page.waitForResponse(response => response.url().includes('/api/cart') && response.status() === 201);
    const kupTerazButton = page.getByRole('button', { name: 'Kup teraz'});
    await kupTerazButton.click();
    await cartPromise;
    const koszykWidoczny = page.getByRole('link', { name: 'Koszyk (1)'});
    await expect(koszykWidoczny).toBeVisible();
});