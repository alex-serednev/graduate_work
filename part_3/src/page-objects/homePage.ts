import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
    readonly page: Page;
    public url: string;
    private getStartedLink: any;
    

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/';
        this.getStartedLink = page.locator('');
    }

}