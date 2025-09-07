import { test, expect } from '@playwright/test';
test('Todo Page', async ({ page }) => {

    await test.step('Go to material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click Bài học 3: Todo page', async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    })
    await test.step('Add 100 todo item', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`)
            await page.locator('//button[@id="add-task"]').click();
        }
    })
    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await test.step('Delete odd todos', async () => {
        for (let i = 1; i <= 100; i += 2) {
            await page.click('//button[text()="Delete"]');
        }
    });
});
