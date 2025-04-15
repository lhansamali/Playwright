import { test, expect } from '@playwright/test';

test.describe('Login Page',()=>{
    test('signin', async ({ page }) => {
        await page.goto('https://practicesoftwaretesting.com/');
        await page.locator('[data-test="nav-sign-in"]').click();
        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();
        await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
        await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
      });
})
