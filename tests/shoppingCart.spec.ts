import { test, expect } from '../tests/TestData/TestDataFixture';
import { SigninPage } from './Pages/SigninPage';
import { HomePage } from './Pages/HomePage';
import { ProcessPayment } from './Pages/ProcessPayment';
test.describe('Add items to Shopping Cart',()=>{
    test.beforeEach('signin', async ({ page,testData }) => {
        const signinPage=new SigninPage(page);
  
          await signinPage.goto();
          await signinPage.signin(testData.email,testData.password);
          await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
          await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    });
    test('Buy Items',async ({page})=>{
       const homePage=new HomePage(page);

       //Search the item in Home Page
       await homePage.searchItems("Claw Hammer");
       await expect(page.getByTestId('search_completed').getByRole('link')).toHaveCount(3);

       //Select the item in Home Page
       await homePage.selectItem(1);
       await expect(page.getByTestId('product-name')).toHaveText("Claw Hammer");
    
       //Add the item to the Cart
       await homePage.addToCart();
       await expect(page.getByTestId('product-title')).toHaveText("Claw Hammer");

       //Process the Payment
       const paymentPage=new ProcessPayment(page);
       await paymentPage.fillBillingAddress("Test street 98","Vienea","Eastern","Italy","18393");
       await paymentPage.selectCODPaymentMethod();
       await paymentPage.confirmPayment();
       await expect(page.getByTestId('payment-success-message')).toContainText("Payment was successful");
    });
})