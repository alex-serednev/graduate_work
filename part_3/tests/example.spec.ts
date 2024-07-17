import { test, expect } from '@playwright/test';

import { HeaderPage } from '../src/page-objects/headerPage';
import { HomePage } from '../src/page-objects/homePage';
import { KitchenwarePage } from '../src/page-objects/kitchenwarePage';
import { Basket } from '../src/page-objects/basketPage';
import { AccountPage } from '../src/page-objects/accountPage';
import { TablewarePage } from '../src/page-objects/tablewarePage';
import { SearchPage } from '../src/page-objects/searchPage';
import { ProductPage } from '../src/page-objects/productPage';
import { KnivesPage } from '../src/page-objects/knivesPage';
import { BlogPage } from '../src/page-objects/blogPage';
import { RegisterPage } from '../src/page-objects/registerPage';
import { CraftsmenPage } from '../src/page-objects/craftsmenPage';
import { FiltersPage } from '../src/page-objects/filtersPage';
import { FooterPage } from '../src/page-objects/footerPage';

test.describe.configure({mode: "serial", retries: 0})
test.describe('Finding and saving product', () => {

    test.only('Failed login attempt', async ({ page }) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const accountPage = new AccountPage(page);

          await homePage.openPage(homePage.url);
          await headerPage.clickOnAccount();

          await accountPage.enterWrongEmail();
          await accountPage.enterWrongPassword();
          await accountPage.pressLoginButton();
          await expect(accountPage.incorrectDataError).toBeVisible();
  });

  test('Successful login attempt', async ({ page}) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const accountPage = new AccountPage(page);
      const basket = new Basket(page);

          await homePage.openPage(homePage.url);
          await headerPage.clickOnAccount();

          await accountPage.enterCorrectEmail();
          await accountPage.enterCorrectPassword();
          await accountPage.pressLoginButton();
          await accountPage.validateSuccessfulLogin(); 
  });

  test('Adds item to basket', async ({ page }) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const kitchenwarePage = new KitchenwarePage(page);
      const basket = new Basket(page);
          await homePage.openPage(homePage.url);
          // await homePage.closeAnnoyingPopup(); // IF PAGE LOADING TAKES TOO LONG, UNCOMMENT THIS LINE
          await expect(page).toHaveTitle('High Quality Japanese Ware Directly from JAPAN – miyake-japan');
          await headerPage.clickOnKitchenware();
          await expect(kitchenwarePage.pageTitle).toBeVisible();

          await kitchenwarePage.findAsariKnife();
          await kitchenwarePage.openAsariKnifeCard();

          await expect(kitchenwarePage.asariKnifeImage).toBeVisible();
          await kitchenwarePage.addAsariKnifeToCard();

          await expect(basket.removeButton).toBeVisible();
          await expect(basket.increaceQtyButton).toBeVisible();
          await expect(basket.increaceQtyButton).toBeVisible();
          await basket.removeAdditionalItem();
  });

  test('Attempt to add the item out of stock', async ({ page}) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const tablewarePage = new TablewarePage(page);
      const accountPage = new AccountPage(page);
      const basket = new Basket(page);

          await homePage.openPage(homePage.url);
          await headerPage.clickOnTableware();
          await tablewarePage.openTab3();
          await tablewarePage.openUnavailableItemCard();
          await homePage.closeDiscountPopup();
          await tablewarePage.checkThatItemCantBeAdded();
  })

  test('Checking search tool', async ({ page}) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const searchPage = new SearchPage(page);
      const basket = new Basket(page);
      const productPage = new ProductPage(page);

          await homePage.openPage(homePage.url);
          await headerPage.clickOnSearch();
          await searchPage.searchForSakeSet();
          await searchPage.selectSet();
          await homePage.closeDiscountPopup();
          await productPage.addItemToBasket();
          await basket.closeBasketModal();
  })

  test('Checks that Knives section is empty', async ({ page}) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const knivesPage = new KnivesPage(page);

          await homePage.openPage(homePage.url);
        //   await homePage.closeAnnoyingPopup(); // OPTIONAL
          await headerPage.clickOnKnives();
          await knivesPage.assertListIsEmpty();
          await knivesPage.navigateToMainPage();
          await expect(page).toHaveURL(homePage.url);
  })

  test('Checks blog page', async ({ page }) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const knivesPage = new KnivesPage(page);
      const blogPage = new BlogPage(page);
      const footerPage = new FooterPage(page);

          await homePage.openPage(homePage.url);
        //   await homePage.closeAnnoyingPopup(); // OPTIONAL, FOR SLOW INTERNET
          await headerPage.clickOnBlog();
          await blogPage.openMainArticle();
          await blogPage.openLinkToProduct();
          await expect(page).toHaveURL(blogPage.openedProductUrl);

          await headerPage.clickOnBlog();
          await blogPage.findButenKlinArticle();
          await blogPage.checkButenKlinArticle();
  })

  test('Checks links in the footer', async ({ page }) => {
      const homePage = new HomePage(page);
      const footerPage = new FooterPage(page);
        
          await homePage.openPage(homePage.url);
          await footerPage.clickOnSearchButton();
          await expect(page).toHaveURL(footerPage.searchPageURL);

          await footerPage.clickOnContactButton();
          await expect(page).toHaveURL(footerPage.contactPageURL);

          await footerPage.clickOnRefundButton();
          await expect(page).toHaveURL(footerPage.refundPageURL);

          await footerPage.clickOnPrivacyButton();
          await expect(page).toHaveURL(footerPage.privacyPolicyPageURL);

          await footerPage.clickOnAboutButton();
          await expect(page).toHaveURL(footerPage.aboutUsPageURL);
  });

  test.only('Checks filters', async ({ page }) => {
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const craftsmenPage = new CraftsmenPage(page);
      const tableWare = new TablewarePage(page);
      const filterPage = new FiltersPage(page);
      const footerPage = new FooterPage(page);
      const basket = new Basket(page);

          await homePage.openPage(homePage.url);
          await headerPage.clickOnCraftsmen();
          await homePage.closeDiscountPopup();

          await filterPage.useSortFilter();
          await filterPage.sortFromOldToNew();
          await craftsmenPage.clickOnFirstItem();
          await craftsmenPage.addItemToCard();
          await basket.closeBasketModal();

          await headerPage.clickOnTableware();
          await filterPage.useFilterButton();
          await filterPage.sortByBlackColor();
          await filterPage.applyFilters();
          await tableWare.openBlackPlateItem();
          await tableWare.addItemToCard();

          await basket.validateCheckoutPrice();
  })

    // ATTENTION: THIS TEST MAY FAIL BECAUSE OF ANTIFRAUD

    test('Registers a user', async ({ page}) => {
        const homePage = new HomePage(page);
        const headerPage = new HeaderPage(page);
        const accountPage = new AccountPage(page);
        const registerPage = new RegisterPage(page);
        const basket = new Basket(page);
  
            await homePage.openPage(homePage.url);
            await homePage.closeAnnoyingPopup();
            await headerPage.clickOnAccount();
            await accountPage.clickToCreateNewAcc();
            await registerPage.enterName();
            await registerPage.enterSurname();
            await registerPage.enterEmail();
            await registerPage.enterPassword();
            await registerPage.pressCreateAccount();
  
            await headerPage.clickOnAccount();
            await accountPage.validateSuccessfulLogin();
    })
});