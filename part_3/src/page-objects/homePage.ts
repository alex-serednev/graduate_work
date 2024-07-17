import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly page: Page;
    public url: string;
    private getStartedLink: any;
    public discountPopup: Locator;
    public closePopupButton: Locator;
    
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/';
        this.getStartedLink = page.locator('');
        this.discountPopup = page.locator('aside.NewsletterPopup > button.NewsletterPopup__Close');
        this.closePopupButton = page.locator('button[tabindex="0"] > svg[xmlns="http://www.w3.org/2000/svg"]'); 
    }

    async closeDiscountPopup () {
        await this.discountPopup.click();
    }

    async closeAnnoyingPopup () {
        await this.closePopupButton.click();
    }
};