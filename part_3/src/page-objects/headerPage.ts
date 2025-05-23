import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HeaderPage extends BasePage {
    readonly page: Page;
    public url: string;
    private kitchenwareLink: Locator;
    private knivesLink: Locator;
    private tablewareLink: Locator;
    private craftsmenLink: Locator;
    private supportLink: Locator;
    private accountLink: Locator;
    private searchLink: Locator;
    private cardLink: Locator;

        private aboutLink: Locator;
        private blogLink: Locator;
        private contactLink: Locator;
        // private closeWelcomePopup: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/collections/keizan-kiln';
        this.kitchenwareLink = page.locator('a[href="/collections/kitchenware"][class="Heading u-h6"]');
        this.knivesLink = page.locator('a[href="/collections/knives"][class="Heading u-h6"]');
        this.tablewareLink = page.locator('a[href="/collections/tableware"][class="Heading u-h6"]');
        this.craftsmenLink = page.locator('a[href="/collections/keizan-kiln"][class="Heading u-h6"]');
        this.supportLink = page.locator('a[href="#"][class="Heading u-h6"]');
        this.accountLink = page.locator('//*[@id="section-header"]/div/div[3]/nav/ul/li[1]/a'); // css: a[href="/account"][class^="Heading Link"]
        this.searchLink = page.locator('a[href="/search"][class^="Heading Link"]');
        this.cardLink = page.locator('a[href="/cart"][class="Heading u-h6"]');

                this.aboutLink = page.locator('a[href^="/pages/about-miyake"]');
                this.blogLink = page.locator('a[href="/blogs/news"][class="Link Link--secondary"]'); // ^ Collapsible__Button
                this.contactLink = page.locator('a[href^="/pages/contact"][class^="Collapsible__Button"]');
    };

    async clickOnKitchenware () {
        await this.kitchenwareLink.click();
    }

    async clickOnKnives () {
        await this.knivesLink.click();
    }

    async clickOnCraftsmen () {
        await this.craftsmenLink.click();
    }

    async hoverOverSupport () {
        await this.kitchenwareLink.hover();
    }

    async clickOnAccount () {
        await this.accountLink.click();
    }

    async clickOnSearch () {
        await this.searchLink.click();
    }

    async clickOnTableware () {
        await this.tablewareLink.click();
    }

    async clickOnBlog () {
        await this.supportLink.hover();
        await this.blogLink.click();
    }
};