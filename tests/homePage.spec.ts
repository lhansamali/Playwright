import { test, expect } from '@playwright/test';

test.describe('Search Items',()=>{
    test.beforeEach('Login',async ({page})=>{
        await page.goto("https://practicesoftwaretesting.com/auth/login");
        await page.getByTestId('email').fill("raeinten@gmail.com")
        await page.getByTestId('password').fill("raeInTen*25")
        await page.getByTestId('login-submit').click();
        await expect(page.getByTestId('nav-menu')).toContainText('Rae in');
    });
    test('search item',async({page})=>{
        await page.getByTestId('nav-home').click();
        await page.getByPlaceholder('search').fill("Pliers");
        await page.getByTestId('search-submit').click();
        await expect(page.getByTestId('search_completed').getByRole("link")).toHaveCount(4);
    })
});