import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DocsPage extends BasePage {
    readonly page: Page;
    private static url: string = 'https://miyakeceramics.com/';
    private getStartedLink: string;
    private header: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.header = this.page.getByRole('heading', {name: 'Installation'}) // исправить под свой проект
    }

    async openPageUrl(url: string) {
        await super.openPage(DocsPage.url); 
    }
}