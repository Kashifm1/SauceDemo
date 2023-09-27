import { Then } from "@wdio/cucumber-framework";
import { browser, expect } from "@wdio/globals";
import CheckoutPage from "../../pageobjects/sauceDemoPage/Checkout.page";
import ProductPage from "../../pageobjects/sauceDemoPage/Product.page";
import CartPage from "../../pageobjects/sauceDemoPage/Cart.page";
import CheckoutOverviewPage from "../../pageobjects/sauceDemoPage/CheckoutOverview.page";
import CheckoutCompletePage from "../../pageobjects/sauceDemoPage/CheckoutComplete.page";
import chai from "chai";
const data=require('../../resource/data.json')

Then(/^I expect the title Swag Labs is displayed$/, async function () {
  let currentTitle = await browser.getTitle();
  expect(currentTitle).toHaveText(data.productPageHeader);
});
Then(/^I expect the product page is displayed$/, async () => {
  await expect(ProductPage.productHeader).toHaveText(data.productPageTitle);
});
Then(/^I expect that add to cart is clickable$/, async () => {
  let addToCartBtn = await ProductPage.addToCart;
  await expect(addToCartBtn).toBeClickable();
});

Then(/^I go to cart$/, async function () {
  await ProductPage.cartLink.click();
});
Then(/^I expect the item is displayed$/, async function () {
  await expect(CartPage.cartItem).toHaveText(data.product);
});
Then(/^I click on checkout$/, async function () {
  CartPage.checkoutClick();
});
Then(
  /^I enter firstName, lastName, postalCode and click on continue$/,
  async function () {
    await CheckoutPage.checkoutDetails(data.firstName, data.lastName, data.postalCode);
  }
);
Then(/^I click on the finish button$/, async function () {
  await CheckoutOverviewPage.finishClick();
});

Then(/^I click on highest price product$/, async function () {
  const price = await ProductPage.price;
  let cart = await ProductPage.addToCart;
  let arr = [];   
  for (let i = 0; i < price.length; i++) {
   let pricesText= await price[i].getText();
   let priceIntValue = +pricesText.replace("$", "");
    (arr as number[]).push(priceIntValue)
    arr.sort((a,b)=>b-a)
  }
  for (let i = 0; i < price.length; i++) {
    let pricesText= await price[i].getText();
    let priceIntValue = +pricesText.replace("$", "");
    if (priceIntValue == arr[1]) {
      await cart[i].click();
      break;
    }
   }
  console.log(arr)
});
Then(
  /^I expect Thank you for your order! header should be displayed$/,
  async function () {
    expect(CheckoutCompletePage.thankYouMsg).toHaveText(
     data.thankYouMsg
    );
  }
);
