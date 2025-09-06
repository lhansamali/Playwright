import{test,expect} from '../main/Util/Base';
test.describe('Login Page',()=>{
    test('signin', async ({ page,testData,signinPage }) => {
      
        await signinPage.goto();
        await signinPage.signin(testData.email,testData.password);
        await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
        await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
      });
})
