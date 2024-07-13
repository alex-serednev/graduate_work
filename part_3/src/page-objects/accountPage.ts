import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class AccountPage extends BasePage {
    readonly page: Page;
    public url: string = 'https://miyakeceramics.com/account';
    private emailField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    public incorrectDataError: Locator;
    private greetingAfterLogin: Locator;
    public createNewAccButton: Locator;

        private validEmail: string;
        private validPass: string;
        public invalidEmail: string;
        public invalidPass: string;
        private welcomeMessage: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailField = page.locator('div.Form__Item > input[type="email"][name="customer[email]"]');
        this.passwordField = page.locator('input[type="password"]');
        this.loginButton = page.locator('//*[@id="customer_login"]/button'); 
        this.incorrectDataError = page.locator('p[class="Form__Alert Alert Alert--error"]');
        this.greetingAfterLogin = page.locator('p.SectionHeader__Description');
        this.createNewAccButton = page.locator('a[href="/account/register"]');
        
        this.invalidEmail = 'abcde@test.com';
        this.invalidPass = 'wrong.password';
        this.validEmail = 'alexey.serednev@gmail.com';
        this.validPass = 'userpass652';
        this.welcomeMessage = 'Welcome back, Aleksei!';
    }

    async enterWrongEmail () {
        await this.emailField.click();
        await this.emailField.fill(this.invalidEmail);
    }

    async enterWrongPassword () {
        await this.passwordField.click();
        await this.passwordField.fill(this.invalidPass);
    }

    async enterCorrectEmail () {
        await this.emailField.click();
        await this.emailField.fill(this.validEmail);
    }

    async enterCorrectPassword () {
        await this.passwordField.click();
        await this.passwordField.fill(this.validPass)
    }

    async pressLoginButton () {
        await this.loginButton.click();
    }

    async validateSuccessfulLogin () {
        await expect(this.greetingAfterLogin).toHaveText(this.welcomeMessage);
    }

    async clickToCreateNewAcc () {
        await this.createNewAccButton.click();
    }
};