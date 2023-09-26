import { Then } from "@wdio/cucumber-framework";
import { browser, expect } from "@wdio/globals";
import { $, $$ } from "@wdio/globals";
import CheckoutPage from "../../pageobjects/Checkout.page";
import ProductPage from "../../pageobjects/Product.page";
import CartPage from "../../pageobjects/Cart.page";
import CheckoutOverviewPage from "../../pageobjects/CheckoutOverview.page";
import CheckoutCompletePage from "../../pageobjects/CheckoutComplete.page";

Then(/^I expect the title Swag Labs is displayed$/, async function () {
  let currentTitle = await browser.getTitle();
  expect(currentTitle).toHaveText("Swag Labs");
});
Then(/^I expect the product page is displayed$/, async () => {
  await expect(ProductPage.productHeader).toHaveText("Products");
});
Then(/^I expect that add to cart is clickable$/, async () => {
  let addToCartBtn = await ProductPage.addToCart;
  await expect(addToCartBtn).toBeClickable();
});

Then(/^I go to cart$/, async function () {
  await ProductPage.cartLink.click();
});
Then(/^I expect the item is displayed$/, async function () {
  await expect(CartPage.cartItem).toHaveText("Sauce Labs Backpack");
});
Then(/^I click on checkout$/, async function () {
  CartPage.checkoutClick();
});
Then(
  /^I enter firstName, lastName and postalCode and click on continue$/,
  async function () {
    await CheckoutPage.checkoutDetails("mirza", "baig", "122434");
  }
);
Then(/^I click on the finish button$/, async function () {
  await CheckoutOverviewPage.finishClick();
});

Then(/^I click on highest price product$/, async function () {
  const price = await $$("//div[@class='inventory_item_price']");
  const cprice = await $$(price);
 // let arr = [];
  let cart = await $$("//button[contains(.,'Add to cart')]");
  for (let i = 0; i < cprice.length; i++) {
    let ptext = await cprice[i].getText();
    let intValue = await +ptext.replace("$", "");
    if (intValue == 29.99) {
      await cart[i].click();
      break;
    }
  }
});
Then(/^I expect Thank you for your order! header should be displayed$/,
  async function () {
    expect(CheckoutCompletePage.thankYouMsg).toHaveText("Thank you for your order!");}
);
