import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class Basket extends BasePage {
    readonly page: Page;
    public removeButton: Locator;
    public reduceQtyButton: Locator;
    public increaceQtyButton: Locator;
    public closeBasketButton: Locator;
    public proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.removeButton = page.locator('a[class="CartItem__Remove Link Link--underline Link--underlineShort"]');
        this.reduceQtyButton = page.locator('a[class="wsgReload QuantitySelector__Button Link Link--primary"] > svg[class="Icon Icon--minus"]');
        this.increaceQtyButton = page.locator('a[class="wsgReload QuantitySelector__Button Link Link--primary"] > svg[class="Icon Icon--plus"]');
        this.closeBasketButton = page.locator('button[class^="Drawer__Close"][data-drawer-id="sidebar-cart"]');
        this.proceedToCheckoutButton = page.locator('button[name="checkout"]');
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

    async closeBasketModal () {
        await this.closeBasketButton.click();
    }

    async validateCheckoutPrice () {
        await expect(this.proceedToCheckoutButton).toHaveText('Checkout');
    }
};