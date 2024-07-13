import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';
import * as funct from '../../utils/functions'
import { Url } from 'url';

export class FooterPage extends BasePage {
    readonly page: Page;
    private searchButton: Locator; 
    private contactButton: Locator;
    private refundButton: Locator;
    private privacyButton: Locator;
    private aboutButton: Locator;

        private emailForSubscribeField: Locator;
        private subscribeButton: Locator;
        public emailForSubscription: string;

            public searchPageURL: string;
            public contactPageURL: string;
            public refundPageURL: string;
            public privacyPolicyPageURL: string;
            public aboutUsPageURL: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.searchButton = page.locator('a[href="/search"][class="Link Link--primary"]');
        this.contactButton = page.locator('a[href="/pages/contact"][class="Link Link--primary"]');
        this.refundButton = page.locator('a[href="/policies/refund-policy"][class="Link Link--primary"]');
        this.privacyButton = page.locator('a[href="/policies/privacy-policy"][class="Link Link--primary"]');
        this.aboutButton = page.locator('a[href="/pages/about-miyake-ceramics-co-ltd"][class="Link Link--primary"]');

            this.emailForSubscribeField = page.locator('input[type="email"][aria-label="Enter your email address"]');
            this.subscribeButton = page.locator('button[class="Form__Submit Button Button--primary"]');
            this.emailForSubscription = funct.createTestEmail();

            this.searchPageURL = "https://miyakeceramics.com/search";
            this.contactPageURL = "https://miyakeceramics.com/pages/contact";
            this.refundPageURL = "https://miyakeceramics.com/policies/refund-policy";
            this.privacyPolicyPageURL = "https://miyakeceramics.com/policies/privacy-policy";
            this.aboutUsPageURL = "https://miyakeceramics.com/pages/about-miyake-ceramics-co-ltd";
    }


    async clickOnSearchButton () {
        await this.searchButton.scrollIntoViewIfNeeded();
        await this.searchButton.click();
    }

    async clickOnContactButton () {
        await this.contactButton.scrollIntoViewIfNeeded();
        await this.contactButton.click();
    }

    async clickOnRefundButton () {
        await this.refundButton.scrollIntoViewIfNeeded();
        await this.refundButton.click();
    }

    async clickOnPrivacyButton () {
        await this.privacyButton.scrollIntoViewIfNeeded();
        await this.privacyButton.click();
    }

    async clickOnAboutButton () {
        await this.aboutButton.scrollIntoViewIfNeeded();
        await this.aboutButton.click();
    }

    async enterEmailForSubscribe () {
        await this.emailForSubscribeField.scrollIntoViewIfNeeded();
        await this.emailForSubscribeField.click();
        await this.emailForSubscribeField.fill(this.emailForSubscription);
    }

    async scrollThroughTheWholePage () {
        await this.contactButton.scrollIntoViewIfNeeded();
    }
};