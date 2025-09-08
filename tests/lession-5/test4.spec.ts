import { test, expect } from '@playwright/test';
test('Personal Page', async ({ page }) => {
    await test.step('Open báo khoa học page ', async () => {
        await page.goto('https://vnexpress.net/khoa-hoc-cong-nghe',{
              waitUntil: 'domcontentloaded',
              timeout: 60000 
            });
    })

    const articles = page.locator('article.item-news');
    const count = await articles.count();
    console.log(count);
    const max = Math.min(count, 10); // chỉ lấy tối đa 10 bài
    const notes: { title: string; summary: string }[] = [];
    for (let i = 0; i < max; i++) {
        const title = await page.locator(`(//article[contains(@class,"item-news")]//h3[contains(@class,"title-news")]/a)[${i+1}]`).innerText();
        const summary = await page.locator(`(//article[contains(@class,"item-news")]//p[contains(@class,"description")]/a)[${i+1}]`).innerText();

        notes.push({ title, summary });
        console.log(notes);
    }
    console.log(notes);

    await test.step('Go to material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click Bài học 4: Personal notes', async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    })
    await test.step('Create personal note', async () => {
        for (const note of notes) {
            await page.locator('//input[@id="note-title"]').fill(note.title);
            await page.locator('//input[@id="note-content"]').fill(note.summary);
            await page.locator('//button[@id="add-note"]').click();
        }
    })


});
