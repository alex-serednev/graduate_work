import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class TablewarePage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/collections/tableware';
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

// async function2 () {
//     await expect(this.field3).locator.hasText('test');
// }

}