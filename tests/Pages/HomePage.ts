import { Page } from "@playwright/test";

export class HomePage{
    constructor(private page:Page){}

    async searchItems(itemName:string){
        await this.page.getByTestId('nav-home').click();
        await this.page.getByTestId('search-query').fill(itemName);
        await this.page.getByTestId('search-submit').click();
    }
    async selectItem(itemNo:number){
        const item=this.page.locator('xpath=//div[@data-test="search_completed"]/a');
        await item.nth(itemNo).click();
    }
    async addToCart(){
        await this.page.getByText("Add to cart").click();
        await this.page.getByTestId('nav-cart').click();
    }
    
}