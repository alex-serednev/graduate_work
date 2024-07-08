import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ProductPage extends BasePage {
    readonly page: Page;
    public removeButton: Locator;
    public addToCardButton: Locator;
    public reduceQtyButton: Locator;
    public increaceQtyButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.removeButton = page.locator('a[class="CartItem__Remove Link Link--underline Link--underlineShort"]');
        this.addToCardButton = page.locator('button[type="submit"][class^="wsgRedirectCart"]')
        this.reduceQtyButton = page.locator('a[class="wsgReload QuantitySelector__Button Link Link--primary"] > svg[class="Icon Icon--minus"]');
        this.increaceQtyButton = page.locator('a[class="wsgReload QuantitySelector__Button Link Link--primary"] > svg[class="Icon Icon--plus"]');
    }

    async addItemToBasket () {
        await this.addToCardButton.click();
    }

    async removeItem () {
        await this.removeButton.click();
    }

    async addAdditionalItem () {
        await this.increaceQtyButton.click();
    }

    async removeAdditionalItem () {
        await this.reduceQtyButton.click();
    }
}