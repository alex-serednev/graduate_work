import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class BlogPage extends BasePage {
    readonly page: Page;
    public url: string;
    private mainArticle: Locator;
    private minorArticle: Locator;
    private linkToProduct: Locator;
    public openedProductUrl: string;
    public buntenKlinArticle: Locator;
    public buntenKlinArticleHeading: Locator;
    public textOfBuntenKlinArcitle: Locator;
    public articleText: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://miyakeceramics.com/blogs/news';
        this.mainArticle = page.locator('div[class="SectionHeader__ButtonWrapper"] > a[href$="shooting-at-kifune"]');
        this.minorArticle = page.locator('a[href="/blogs/news/eki-gold"][class^="ArticleItem__Link"]');
        this.linkToProduct = page.locator('a[href="https://miyakeceramics.com/products/tanka-black-mokume-20cm-plate"]');
        this.openedProductUrl = 'https://miyakeceramics.com/products/tanka-black-mokume-20cm-plate';
        this.buntenKlinArticle = page.locator('h2[class="ArticleItem__Title Heading u-h2"] > a[href="/blogs/news/our-bunten-kiln"]');
        this.buntenKlinArticleHeading = page.locator('h1[class="Article__Title Heading u-h1"]');
        this.textOfBuntenKlinArcitle = page.locator('div[class="Article__Body Rte"] > p:nth-child(1)');
        this.articleText = "Miyake Ceramics owns a roller-hearth kiln called BUNTEN-KILN. Bunten Kiln can do a particular firing; In-Glaze.";   
    }

async openMainArticle () {
    await this.mainArticle.click();
}

async openLinkToProduct () {
    await this.linkToProduct.click();
}

async openAnotherArticle () {
    await this.minorArticle.click();
}

async findButenKlinArticle () {
    await this.buntenKlinArticle.click();
}

async checkButenKlinArticle () {
    await expect(this.buntenKlinArticleHeading).toBeVisible();
    await expect(this.textOfBuntenKlinArcitle).toHaveText(this.articleText);
}
};