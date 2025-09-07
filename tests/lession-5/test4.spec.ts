import { test, expect } from '@playwright/test';
test('Personal Page', async ({ page }) => {
    await test.step('Open báo khoa học page ', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe');
    })
    const articles = page.locator('article.item-news');
    const count = await articles.count();
    await test.step('Go to material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    })
    await test.step('Create personal note', async () => {
            for (let j=1;j<=10; j++){
            const title = await articles.nth(j).locator('h3.title-news a').innerText(); 
            const summary = await articles.nth(j).locator('p.description a').innerText();
            await page.locator('//input[@id="note-title"]').fill(title);
            await page.locator('//textarea[@id="note-content"]').fill(summary);
            await page.locator('//button[@id="add-note"]').click();
            }
    })


});
