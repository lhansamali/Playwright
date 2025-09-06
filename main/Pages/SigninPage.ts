import {Page} from '@playwright/test'

export class SigninPage{
    constructor(private page :Page){}

    async goto(){
        await this.page.goto("https://practicesoftwaretesting.com/auth/login");
    }
    async signin(email:string,password:string){
        await this.page.getByTestId('email').fill(email);
        await this.page.getByTestId('password').fill(password)
        await this.page.getByTestId('login-submit').click();
    }
    


}