import { test, expect } from '@playwright/test';
test('Register page', async ({ page }) => {

    await test.step('Go to material.playwrightvn.com', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click Bài học 1: Register Page ', async () => {
        await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
    })
    await test.step('Nhập username', async () => {
        await page.locator('//input[@id="username"]').fill("thaovt");
    })
    await test.step('Nhập email', async () => {
        await page.locator('//input[@id="email"]').fill("thaovt46@gmail.com");
    })
    await test.step('Select Gender', async () => {
        await page.locator('//input[@id="female"]').check();
    })
    await test.step('Select Hobbies', async () => {
        await page.locator('//input[@id="cooking"]').check();
    })
    await test.step('Select Interest', async () => {
        await page.locator('//select[@id="interests"]').selectOption("art");
    })
    await test.step('Select Country', async () => {
        await page.locator('//select[@id="country"]').selectOption("canada");
    })
    await test.step('Date of Birth', async () => {
        await page.locator('//input[@id="dob"]').fill('1987-06-04');
    })
    await test.step('Upload profile picture', async () => {
        await page.setInputFiles('//input[@id="profile"]', '/Users/macbook/Downloads/image (57).png');
    })
    await test.step('Fill Biography', async () => {
        await page.locator('//textarea[@id="bio"]').fill("My name is Thao");
    })
    await test.step('Set Rate Us', async () => {
        await page.locator('//input[@id="rating"]').fill("6");
    })
    await test.step('Select Favorite color', async () => {
        await page.locator('//input[@id="favcolor"]').fill("#63ca9a");
    })
    await test.step('Select Newsletter', async () => {
        await page.getByRole('checkbox', { name: 'Subscribe' }).check();
    })
    await test.step('Enable Feature:', async () => {
        await page.locator('#registrationForm div:has-text("Enable Feature:") span').waitFor();
        await page.locator('#registrationForm div:has-text("Enable Feature:") span').click();

    })
    await test.step('Star Rating', async () => {
        await page.locator('//div[@id="starRating"]').click();
    })
    await test.step('Click button Register', async () => {
        await page.locator('//button[text() ="Register"]').click();
    })

});
