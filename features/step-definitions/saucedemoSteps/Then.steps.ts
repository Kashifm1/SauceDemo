import { Then } from "@wdio/cucumber-framework";
import { browser, expect } from "@wdio/globals";
import CheckoutPage from "../../pageobjects/sauceDemoPage/Checkout.page";
import ProductPage from "../../pageobjects/sauceDemoPage/Product.page";
import CartPage from "../../pageobjects/sauceDemoPage/Cart.page";
import CheckoutOverviewPage from "../../pageobjects/sauceDemoPage/CheckoutOverview.page";
import CheckoutCompletePage from "../../pageobjects/sauceDemoPage/CheckoutComplete.page";
import ActiHomePage from "../../pageobjects/sauceDemoPage/actitimePage/ActiHome.page";
import chai from "chai";
import TasksPage from "../../pageobjects/sauceDemoPage/actitimePage/Tasks.page";
import CreateCustomerPage from "../../pageobjects/sauceDemoPage/actitimePage/CreateCustomer.page";
import CreateNewProjectPage from "../../pageobjects/sauceDemoPage/actitimePage/CreateNewProject.page";
const data = require("../../resource/data.json");

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

//Actitime
Then(/^I expect login page should be displayed$/, async function(){
  const title=await browser.getTitle()
  chai.expect(title).to.equal(data.actitimeLoginTitle)

})
Then(/^I expect actitime home page should be displayed$/, async function(){
  await ActiHomePage.tasks.waitForDisplayed()
  const title1=await browser.getTitle();
  let new_title= await title1.trim()
    let expectedTitle=await data.actiHomeTitle.trim()
    chai.expect(new_title).to.equal(expectedTitle)
})
Then(/^I click on tasks link$/, async function(){
  await ActiHomePage.tasks.click()
  
})
Then(/^I expect tasks page should be displayed$/, async function(){
  await TasksPage.addNew.waitForClickable()
  const title=await browser.getTitle()
  const expectedTitle=data.actitimeTaskTitle
  chai.expect(title).to.equal(expectedTitle)

})
Then(/^I click on new customer$/, async function(){
  await TasksPage.addNew.click()
  await TasksPage.newCustomer.click()
})
Then(/^I expect new customer page should be displayed$/, async function(){
  await CreateCustomerPage.header.waitForDisplayed()
  let customerText=await CreateCustomerPage.header.getText()
  chai.expect(customerText).to.equal(data.customerHeader)
  // await browser.debug()
})
Then(/^I enter customerName, description, select an option from existing customer and click on create$/, async function(){
  const num = Math.floor(Math.random() * 100) + 1
  await CreateCustomerPage.createCustomer(data.customerName+num, data.custDescription)
})
Then(/^I expect customer name should be visible$/, async function(){
  
})
Then(/^I click on new project$/, async function(){
  await browser.pause(3000)
  await TasksPage.addNew.click()
  await TasksPage.newProject.click()
})
Then(/^I expect project name should be visible$/, async function(){
  await CreateNewProjectPage.projectHeader.waitForDisplayed()
  let header=await CreateNewProjectPage.projectHeader.getText()
  chai.expect(header).to.equal(data.projectHeader)
})
Then(/^I enter project name, customer, description, tasks and click on create$/,async function(){
  const num = Math.floor(Math.random() * 100) + 1
  await CreateNewProjectPage.createProjectDetails(data.createNewProject+num, data.projectDescription, data.projectTaskName)

})
Then(/^I click on logout$/, async function(){
  await ActiHomePage.logout.click()
})
Then(/^I expect actitime login page should be displayed$/, async function(){
  const loginUrl=await browser.getUrl()
  chai.expect(loginUrl).to.equal(data.actitimeUrl)
})

