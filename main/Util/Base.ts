import { test as base } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { SigninPage } from '../Pages/SigninPage';
import { PageFactory } from '../Pages/PageFactory';

type customFixtures = {
    homePage: HomePage;
    signinPage: SigninPage;
    pageFactory: PageFactory;
    
    testData: TestData;
};
type TestData={
    email:string;
    password:string;
}

export const test = base.extend<customFixtures>({

    //Only for the most used pages create fixtures
    homePage: async({page},use)=>{
        const homePage=new HomePage(page);
        await use(homePage);
    },
    signinPage: async({page},use)=>{
        const signinPage=new SigninPage(page);
        await use(signinPage);
    },
    //For other pages use Page Factory
    pageFactory: async({page},use)=>{
        await use(new PageFactory(page));
    },
    
    //Test Data Fixture - can be used in any test file
    testData: async ({}, use) => {
        const data = {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01'
            };
            await use(data);
        }
})
export const expect=test.expect;