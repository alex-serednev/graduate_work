import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class KitchenwarePage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/collections/kitchenware';
    public pageTitle: Locator;
    public asariKnife: Locator;
    public asariKnifeImage: Locator;
    public addItemButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.pageTitle = page.locator('h1[class^="SectionHeader__Heading"]');
        this.asariKnife = page.locator('div[class="AspectRatio AspectRatio--withFallback"] > img[data-image-id="15343410905147"]');
        this.asariKnifeImage = page.locator('img[class="Image--fadeIn lazyautosizes Image--lazyLoaded"]');
        this.addItemButton = page.locator('button[type="submit"][data-action="add-to-cart"]');
    }

    async findAsariKnife () {
        await this.asariKnife.scrollIntoViewIfNeeded();
    }

    async openAsariKnifeCard () {
        await this.asariKnife.click();
    }

    async addAsariKnifeToCard () {
        await this.addItemButton.click();
    }

// async function1 () {
//     await this.field.fill('');
//     await this.field2.click('');
// }

}