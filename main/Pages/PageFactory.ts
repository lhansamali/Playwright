/**
 * PageFactory class to manage page instances
 * This class helps in creating and managing instances of different page classes.
 * It ensures that each page class is instantiated only once and reused across tests.
 */
export class PageFactory{
    private _pages: {}; // Store instances of pages
    page: any;// Playwright page instance
    constructor(page){
        this.page=page; // Playwright page instance
        this._pages={}; // Initialize the pages object
    }
    getPage({PageClass}){
        const key=PageClass.name; // Get the name of the class as key
        if(!this._pages[key]){
            this._pages[key]=new PageClass();// Create an instance of the page class
        }
        return this._pages[key];  // Return the instance of the page class
    }
}

