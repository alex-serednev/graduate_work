import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SearchPage extends BasePage {
    readonly page: Page;
    private getStartedLink: any;
    public searchField: Locator;
    public itemName: string;
    public itemLocator: Locator;
    public itemUrl: string;
    
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchField = page.locator('input[type="search"]');
        this.itemName = 'IRO ORIBE Sake Set';
        this.itemLocator = page.locator('a[href^="/products/keizan-wada-kuro-oribe-sake-set"] > div[class^="AspectRatio"]');
        this.itemUrl = 'https://miyakeceramics.com/products/keizan-wada-kuro-oribe-sake-set%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC?_pos=1&_sid=94ed837b2&_ss=r';
        // URL captured in another run: https://miyakeceramics.com/products/keizan-wada-kuro-oribe-sake-set%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC?_pos=1&_sid=0b457a222&_ss=r
    }

    async searchForSakeSet () {
        await this.searchField.fill(this.itemName);
        await this.page.keyboard.down('Enter');
    }

    async selectSet() {
        await this.itemLocator.click();
    }

};