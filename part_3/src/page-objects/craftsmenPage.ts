import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CraftsmenPage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/collections/keizan-kiln';

    private oldestItem: Locator;
    private addItemToCardButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.oldestItem = page.locator('img[data-image-id="18772590067879"]');
        this.addItemToCardButton = page.locator('button[type="submit"][class^="wsgRedirectCart"]');
    }

async checkFirstItem () {
    await expect(this.oldestItem).toBeVisible();
}

async clickOnFirstItem () {
    await this.oldestItem.scrollIntoViewIfNeeded();
    await this.oldestItem.click();
}

async addItemToCard() {
    await this.addItemToCardButton.click();
}

}