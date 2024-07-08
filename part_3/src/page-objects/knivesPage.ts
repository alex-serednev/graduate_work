import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class KnivesPage extends BasePage {
    readonly page: Page;
    public url: string;
    public emptyStateElement: Locator;
    public goToMainPageButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/collections/knives';
        this.emptyStateElement = page.locator('h3[class="EmptyState__Title Heading u-h5"]');
        this.goToMainPageButton = page.locator('a[href="https://miyakeceramics.com"][class^="EmptyState"]');
    }

    async assertListIsEmpty () {
        await expect(this.emptyStateElement).toHaveText('Collection Knives is empty');
    }

    async navigateToMainPage () {
        await this.goToMainPageButton.click();
    }
};