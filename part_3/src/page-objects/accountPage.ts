import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class AccountPage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/account';
    private field: Locator;
    private field2: Locator;
    private field3: Locator;
    private field4: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.field = page.locator('');
        this.field2 = page.locator('');
        this.field3 = page.locator('');
        this.field4 = page.locator('');
    }

async function1 () {
    await this.field.fill('');
    await this.field2.click();
}

}