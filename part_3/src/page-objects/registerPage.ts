import { expect, type Locator, type Page } from '@playwright/test';
import { AccountPage } from './accountPage';
import * as funct from '../../utils/functions';

export class RegisterPage {
    readonly page: Page;
    public url: string;
    private enterEmailField: Locator;
    private enterPasswordField: Locator;
    public createNewAccButton: Locator;
    public nameField: Locator;
    public surnameField: Locator;
    public createMyAccButton: Locator;
    public incorrectDataError: Locator;

        private validEmail: string;
        private validPass: string;
        private welcomeMessage: string;
        public userName: string;
        public userSurname: string;
        public invalidEmail: string;
        public invalidPass: string;
        

    constructor(page: Page) {
        this.page = page;
        this.enterEmailField = page.locator('input[name="customer[email]"]');
        this.enterPasswordField = page.locator('input[name="customer[password]"]');
        this.incorrectDataError = page.locator('p[class="Form__Alert Alert Alert--error"]');
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
        await this.enterEmailField.click();
        await this.enterEmailField.fill(email);
    }

    async enterPassword () {
        let pass: string = funct.generateRandomPass();
        await this.enterPasswordField.click();
        await this.enterPasswordField.fill(pass)
    }

    async pressCreateAccount () {
        await this.createMyAccButton.click();
    }
};