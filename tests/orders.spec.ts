import { test, expect} from "@playwright/test";
import {OrdersPage} from "../src/pages/OrdersPage";
let stronaZamowien : OrdersPage;

test.beforeEach( async ({ page }) => {
    stronaZamowien = new OrdersPage(page);
    await page.goto('/orders');
});

test ('Anulowanie wybranego zamówienia z listy', async ({ page }) =>{
    await stronaZamowien.anulujZamowienie('ZAM-99942');
    await expect(page.getByText('Pomyślnie anulowano zamówienie ZAM-99942')).toBeVisible()
});
