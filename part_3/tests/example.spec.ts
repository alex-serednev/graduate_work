import { test, expect } from '@playwright/test';

import { BasePage } from '../src/page-objects/basePage';
import { HeaderPage } from '../src/page-objects/headerPage';
import { HomePage } from '../src/page-objects/homePage';
import { KitchenwarePage } from '../src/page-objects/kitchenwarePage'
import { Basket } from '../src/page-objects/basketPage'

test.describe.configure({mode: "serial", retries: 0})
test.describe('Finding and saving product', () => {

    test.beforeEach(async ({ page }) => {
      console.log('Running tests:');
    });

    test('Adds item to basket', async ({ page }) => {
        const basePage = new BasePage(page);
        const homePage = new HomePage(page);
        const headerPage = new HeaderPage(page);
        const kitchenwarePage = new KitchenwarePage(page);
        const basket = new Basket(page);
            await homePage.openPage(homePage.url);
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
    })

    test('Adds item to basket', async ({ page }) => {
      const basePage = new BasePage(page);
      const homePage = new HomePage(page);
      const headerPage = new HeaderPage(page);
      const kitchenwarePage = new KitchenwarePage(page);
      
  });

//     test.skip('adds product to the basket', async ({ page }) => {
//       await page.goto('https://playwright.dev/');

//       // Click the get started link.
//       await page.getByRole('link', { name: 'Get started' }).click();

//       // Expects page to have a heading with the name of Installation.
//       await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//       })   
// });

// const menuSections = [
//   { name: 'MUST HAVE', locator: `img[alt="casual effortless men pants"]` },
//   { name: 'BOTTOMS', locator: 'a[href="/collections/pants"][class^="header__menu-item"]' },
//   { name: 'TOPS', locator: 'a[href="/collections/tops"][class^="header__menu-item"]' },
//   { name: 'BASIC', locator: 'a[href="/collections/essentials"][class^="header__menu-item"]' },
//   { name: 'EMBROIDERED', locator: 'a[href="/collections/embroidered"][class^="header__menu-item"]' },
//   { name: 'NEW', locator: 'a[href="/collections/new-arrivals"][class^="header__menu-item"]' },
//   { name: 'CLEARANCE', locator: 'a[href="/collections/clearance"][class^="header__menu-item"]' },
// ];

// test.describe('Menu Section Tests', () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://kidoriman.com/')
//   });

//   for (const section of menuSections) {
//     test(`Check ${section.name} section`, async ({ page }) => {
//       await page.click(section.locator);
//       const title = await page.title();
//       expect(title.toLowerCase()).toContain(section.name.toLowerCase());
//     });
  // }
// });