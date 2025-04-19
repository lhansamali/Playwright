import { test, expect } from '@playwright/test';
test.describe('Add items to Shopping Cart',()=>{
    test.beforeEach('Login',async ({page})=>{
        await page.goto('https://practicesoftwaretesting.com/auth/login');
        await page.getByTestId('email').fill("customer@practicesoftwaretesting.com");
        await page.getByTestId('password').fill("welcome01")
        await page.getByTestId('login-submit').click();
        await expect(page.getByTestId('nav-menu')).toContainText(' Jane Doe ');
    });
    test('Buy Items',async ({page})=>{
       await page.getByTestId('nav-home').click();
       await page.getByTestId('search-query').fill("Claw Hammer");
       await page.getByTestId('search-submit').click();
       await expect(page.getByTestId('search_completed').getByRole('link')).toHaveCount(3);

       await page.locator('xpath=//div[@data-test="search_completed"]/a[2]').click();
       await expect(page.getByTestId('product-name')).toContainText("Claw Hammer");
       await page.getByText("Add to cart").click();
       await page.getByTestId('nav-cart').click();
       await expect(page.getByTestId('product-title')).toContainText("Claw Hammer");

       await page.getByRole('button',{name:"Proceed to checkout"}).click();
       await page.getByRole('button',{name:"Proceed to checkout"}).click();
       await page.getByTestId('state').fill("Eastern");
       await page.getByTestId('postal_code').fill("1000");

       await page.getByRole('button',{name:"Proceed to checkout"}).click();
       await page.getByTestId('payment-method').selectOption('Cash on Delivery');
       await page.getByTestId('finish').click();
       await expect(page.getByTestId('payment-success-message')).toContainText("Payment was successful");
    });
})