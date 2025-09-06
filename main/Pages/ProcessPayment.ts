import { Page } from "@playwright/test";

export class ProcessPayment{
    constructor(private page:Page){}

    async fillBillingAddress(street:string,city:string,state:string,country:string,postal_code:string){
        await this.page.getByRole('button',{name:"Proceed to checkout"}).click();
        await this.page.getByRole('button',{name:"Proceed to checkout"}).click();
        await this.page.getByTestId('street').fill(street);
        await this.page.getByTestId('city').fill(city);
        await this.page.getByTestId('state').fill(state);
        await this.page.getByTestId('country').fill(country);
        await this.page.getByTestId('postal_code').fill(postal_code);
        await this.page.getByRole('button',{name:"Proceed to checkout"}).click();
        
    }
    async selectCODPaymentMethod(){
        await this.page.getByTestId('payment-method').selectOption('Cash on Delivery');
    }
    async confirmPayment(){
        await this.page.getByTestId('finish').click();
    }
}