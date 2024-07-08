import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class FiltersPage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/collections/keizan-kiln';
    private sortButton: Locator;
    private filterButton: Locator;
    private createdAscFilter: Locator;
    private blackColorFilter: Locator;
    private applyFiltersButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.sortButton = page.locator('button[aria-label="Show sort by"]');
        this.filterButton = page.locator('button[data-action="open-drawer"][data-drawer-id="collection-filter-drawer"]');
        this.createdAscFilter = page.locator('div[class="Popover__ValueList"] > button[data-value="created-ascending"]');
        this.blackColorFilter = page.locator('button[data-tag="color_black"]');
        this.applyFiltersButton = page.locator('button[data-action="apply-tags"]');
    }

async useSortFilter () {
    await this.sortButton.click();
}

async sortFromOldToNew () {
    await this.createdAscFilter.click();
}

async useFilterButton () {
    await this.filterButton.click();
}

async sortByBlackColor () {
    await this.blackColorFilter.click();
}

async applyFilters () {
    await this.applyFiltersButton.click();
}
};