import { expect, type Locator, type Page } from '@playwright/test';
import { AccountPage } from './accountPage';
import * as funct from '../../utils/functions';

export class RegisterPage extends AccountPage {
    readonly page: Page;
    public url: string;
    private emailField: Locator;
    private passwordField: Locator;
    private loginButton: Locator;
    private greetingAfterLogin: Locator;
    public createNewAccButton: Locator;
    public nameField: Locator;
    public surnameField: Locator;
    public createMyAccButton: Locator;

        private validEmail: string;
        private validPass: string;
        private welcomeMessage: string;
        public userName: string;
        public userSurname: string;
        

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailField = page.locator('input[name="customer[email]"]');
        this.passwordField = page.locator('input[name="customer[password]"]');
        this.loginButton = page.locator('//*[@id="customer_login"]/button'); 
        this.incorrectDataError = page.locator('p[class="Form__Alert Alert Alert--error"]');
        this.greetingAfterLogin = page.locator('p.SectionHeader__Description');
        this.createNewAccButton = page.locator('');
        this.nameField = page.locator('input[name="customer[first_name]"]');
        this.surnameField = page.locator('input[name="customer[last_name]"]');
        this.createMyAccButton = page.locator('button[type="submit"][class$="Button--full"]');
        
        this.invalidEmail = 'abcde@test.com';
        this.invalidPass = 'wrong.password';
        this.validEmail = 'alexey.serednev@gmail.com';
        this.validPass = 'userpass652';
        this.welcomeMessage = 'Welcome back, Aleksei!';
        this.userName = 'Aleksei';
        this.userSurname = 'S';
    }

    async enterName () {
        await this.nameField.click();
        await this.nameField.fill(this.userName);
    }

    async enterSurname () {
        await this.surnameField.click();
        await this.surnameField.fill(this.userSurname);
    }

    async enterEmail () {
        let email: string = funct.createTestEmail();
        await this.emailField.click();
        await this.emailField.fill(email);
    }

    async enterPassword () {
        let pass: string = funct.generateRandomPass();
        await this.passwordField.click();
        await this.passwordField.fill(pass)
    }

    async pressCreateAccount () {
        await this.createMyAccButton.click();
    }

    // async validateSuccessfulLogin () {
    //     await expect(this.greetingAfterLogin).toHaveText(this.welcomeMessage);
    // }

    // async clickToCreateNewAcc () {
    //     await this.createNewAccButton.click();
    // }
};