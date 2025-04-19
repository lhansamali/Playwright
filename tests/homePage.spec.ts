import { test, expect } from '@playwright/test';
/**
 * This is without using POM
 */
test.describe('Search Items',()=>{
    test.beforeEach('Login',async ({page})=>{
        await page.goto("https://practicesoftwaretesting.com/auth/login");
        await page.getByTestId('email').fill("customer@practicesoftwaretesting.com")
        await page.getByTestId('password').fill("welcome01")
        await page.getByTestId('login-submit').click();
        await expect(page.getByTestId('nav-menu')).toContainText(' Jane Doe ');
    });
    test('search item',async({page})=>{
        await page.getByTestId('nav-home').click();
        await page.getByPlaceholder('search').fill("Pliers");
        await page.getByTestId('search-submit').click();
        await expect(page.getByTestId('search_completed').getByRole("link")).toHaveCount(4);
    })
});