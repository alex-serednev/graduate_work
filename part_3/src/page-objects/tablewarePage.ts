import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class TablewarePage extends BasePage {
    readonly page: Page;
    public url: string;
    public tab3: Locator;
    public outOfStockItem: Locator;
    public addToCartDisabledButton: Locator;
    public blackPlate: Locator;
    private addItemToCardButton: Locator;
    

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/collections/tableware';
        this.tab3 = page.locator('a[href="/collections/tableware?page=3"]');
        this.outOfStockItem = page.locator('img[alt="Peacock Green Square Plate"][data-image-id="13953651015739"]');
        this.addToCartDisabledButton = page.locator('button[type="submit"][class^="wsgRedirectCart"]');
        this.blackPlate = page.locator('img[alt="RYOKUSAI 27.5cm Bowl"][data-image-id="18976486097063"]');
        this.addItemToCardButton = page.locator('button[type="submit"][class^="wsgRedirectCart"]');
    }

    async openTab3 () {
        await this.tab3.click();
    }

    async openUnavailableItemCard () {
        await this.outOfStockItem.click();
    }

    async checkThatItemCantBeAdded () {
        await expect(this.addToCartDisabledButton).toBeDisabled;
    }

    async openBlackPlateItem () {
        // await this.blackPlate.scrollIntoViewIfNeeded();
        await this.blackPlate.click();
    }

    async addItemToCard() {
        await this.addItemToCardButton.click();
    }
};