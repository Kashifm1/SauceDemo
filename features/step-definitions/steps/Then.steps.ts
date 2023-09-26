import { Then } from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";
import {  $ } from '@wdio/globals'
import CheckoutPage from '../../pageobjects/Checkout.page';
import ProductPage from '../../pageobjects/Product.page';
import CartPage from '../../pageobjects/Cart.page';
import chai from 'chai';


Then(/^I expect the title "([^"]*)?" is displayed$/, async function(title:string){
    let currentTitle=await browser.getTitle();
    let titleText=await $(title).getText()
    expect(currentTitle).toHaveText(titleText)
  })
  Then(/^I expect that the element "([^"]*)?" is displayed$/, async(val)=>{
    const product=await $(val)
    await expect(product).toHaveText("Products")
})
Then (/^I expect that add to cart is clicked$/, async()=>{
    let addToCartBtn=await ProductPage.addToCart
    await expect(addToCartBtn).toBeClickable()
    await ProductPage.addToCart.click()
})

Then(/^I go to "([^"]*)?" and check the item "([^"]*)?" is displayed$/, async function (cart:string, item:string) {
    const cart1=await $(cart)
    const product1=await $(item)
    await cart1.click();
    await expect(product1).toHaveText("Sauce Labs Backpack")
})
Then(/^I click on checkout$/, async function () {
    CartPage.checkoutClick()
})
Then(/^I enter firstName, lastName and postalCode and click on continue$/, async function () {
    await CheckoutPage.checkoutDetails("mirza","baig","122434")
})
Then(/^I click on the "([^"]*)?" button$/, async function (finish:string) {
    await $(finish).click()
})
