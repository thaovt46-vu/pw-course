import { test, expect } from '@playwright/test';
test('Product page', async ({ page }) => {

    await test.step('Go to material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click Bài học 2: Product page', async () => {
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    })
    await test.step('Click Add to Cart button on Product 1', async () => {
        for (let i = 1; i <= 2; i++) {
            await page.locator('//button[@data-product-id="1"]').click();
        }
    })
    await test.step('Click Add to Cart button on Product 2', async () => {
        for (let i = 1; i <= 3; i++) {
            await page.locator('//button[@data-product-id="2"]').click();
        }
    })
    await test.step('Click Add to Cart button on Product 3', async () => {
        await page.locator('//button[@data-product-id="3"]').click();

    })

});
