import { ProcessPayment } from '../main/Pages/ProcessPayment';
import {test,expect} from '../main/Util/Base';

test.describe('Add items to Shopping Cart',()=>{
    test.beforeEach('signin', async ({ page,testData,signinPage }) => {
       
          await signinPage.goto();
          await signinPage.signin(testData.email,testData.password);
          await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
          await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    });
    test('Buy Items',async ({page,homePage,pageFactory})=>{

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
       const paymentPage=pageFactory.getPage({ PageClass: ProcessPayment })
       await paymentPage.fillBillingAddress("Test street 98","Vienea","Eastern","Italy","18393");
       await paymentPage.selectCODPaymentMethod();
       await paymentPage.confirmPayment();
       await expect(page.getByTestId('payment-success-message')).toContainText("Payment was successful");
    });
})