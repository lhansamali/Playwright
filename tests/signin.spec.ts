import {expect,test} from '../tests/TestData/TestDataFixture.ts'
import { SigninPage } from './Pages/SigninPage.ts';

test.describe('Login Page',()=>{
    test('signin', async ({ page,testData }) => {
        const signinPage=new SigninPage(page);

        await signinPage.goto();
        await signinPage.signin(testData.email,testData.password);
        await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
        await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
      });
})
