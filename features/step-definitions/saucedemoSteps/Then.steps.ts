import { Then } from "@wdio/cucumber-framework";
import { browser, expect } from "@wdio/globals";
import CheckoutPage from "../../pageobjects/sauceDemoPage/Checkout.page";
import ProductPage from "../../pageobjects/sauceDemoPage/Product.page";
import CartPage from "../../pageobjects/sauceDemoPage/Cart.page";
import CheckoutOverviewPage from "../../pageobjects/sauceDemoPage/CheckoutOverview.page";
import CheckoutCompletePage from "../../pageobjects/sauceDemoPage/CheckoutComplete.page";
import chai from "chai";
const data = require("../../resource/data.json");
import homepage from "../../pageobjects/ZohoPage/home.page";
import ZohoSignInPage from "../../pageobjects/ZohoPage/ZohoSignIn.page";
import LoginPopupPage from "../../pageobjects/flipkartPage/LoginPopup.page";
import AppleProductPage from "../../pageobjects/flipkartPage/AppleProduct.page";
const api= require("../../../helper/checkApi.json")

Then(/^I expect the title Swag Labs is displayed$/, async function () {
  let currentTitle = await browser.getTitle();
  await chai.expect(currentTitle).to.be.equal(data.productPageHeader);
});
Then(/^I expect the product page is displayed$/, async () => {
  await chai
    .expect(await ProductPage.productHeader.getText())
    .to.be.equal(data.productPageTitle);
});
Then(/^I expect that add to cart is clickable$/, async () => {
  let addToCartBtn = await ProductPage.addToCart;
  await expect(addToCartBtn).toBeClickable();
  console.log("--------------clicked---------------");
});

Then(/^I go to cart$/, async function () {
  await ProductPage.cartLink.scrollIntoView();
  await ProductPage.cartLink.click();
});

Then(/^I click on checkout$/, async function () {
  await browser.pause(1000);
  await CartPage.checkoutClick();
});
Then(
  /^I enter firstName, lastName, postalCode and click on continue$/,
  async function () {
    await CheckoutPage.checkoutDetails(
      data.firstName,
      data.lastName,
      data.postalCode
    );
  }
);
Then(/^I click on the finish button$/, async function () {
  await CheckoutOverviewPage.finishClick();
});

Then(/^I click on highest price product$/, async function () {
  await ProductPage.addProducts(data.highIndex);
});
Then(
  /^I expect Thank you for your order! header should be displayed$/,
  async function () {
    expect(CheckoutCompletePage.thankYouMsg).toHaveText(data.thankYouMsg);
  }
);

//Zoho

Then(/^I click on sign in button$/, async function () {
  await ZohoSignInPage.signIn.click();
});
Then(/^I expect zoho homepage should be displayed$/, async function () {
  expect(homepage.zohoHeader).toBeDisplayed();
});
Then(
  /^I expect  Some of our most popular apps header should be displayed$/,
  async () => {
    let text=await homepage.zohoHeader.getText()
    chai
      .expect(text)
      .to.be.equal(data.homePageHeader);
  }
);

//flipkart
Then(/^I click on cancel popup$/, async () => {
  let a=await api.data[1].email
  console.log("============"+a+"============");
  try {
    await browser.pause(1000);
    await LoginPopupPage.cancelClick();
  } catch (error) {
    console.log("No popups got");
  }
});
Then(/^I print all products with price$/, async () => {
  await AppleProductPage.productDetails();
});
Then(/^I click on lowest price product$/, async function () {
  await ProductPage.addProducts(data.lowIndex);
});
Then(/^I expect login popup should be displayed$/, async function () {
  await chai.expect(LoginPopupPage.popupText).to.equal(data.popupText);
});
Then(/^I expect flipkart home page should be displayed$/, async function () {
  let title=await browser.getTitle()
  chai.expect(await title.trim()).to.be.equal(data.flipkartHomeTitle)
});

//E2ETest
Then(/^verify if all users exist in customers list$/, async function () {});
