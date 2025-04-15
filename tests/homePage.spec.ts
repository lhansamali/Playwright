import { test, expect } from '@playwright/test';

test.describe('Search Items',()=>{
    test.beforeEach('Login',async ({page})=>{
        await page.goto("https://practicesoftwaretesting.com/auth/login");
        await page.getByTestId('email').fill("customer2@practicesoftwaretesting.com")
        await page.getByTestId('password').fill("welcome01")
        await page.getByTestId('login-submit').click();
    });
    test('search item',async({page})=>{
        await page.getByTestId('nav-home').click();
        await page.getByPlaceholder('search').fill("Pliers");
        await page.getByTestId('search-submit').click();
    })
});