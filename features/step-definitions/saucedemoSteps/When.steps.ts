import {  When } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/sauceDemoPage/login.page';
import ZohoLoginPage from '../../pageobjects/ZohoPage/ZohoLogin.page';
import HomePage from '../../pageobjects/flipkartPage/Home.page';
const data = require("../../resource/data.json");


When (/^I login with valid username and password$/,  
async  ()=> {
    let username= process.env.USER_NAME
    let password= process.env.PASSWORD
     await loginPage.login(username, password )
});

When(/^I sign in using zohoUsername and zohoPassword$/,async ()=>{
    await ZohoLoginPage.zohoSignIn(process.env.ZOHO_USERNAME,process.env.ZOHO_PASSWORD);
});
When(/^I search iphone14$/,async () => {
    await HomePage.searchProduct(data.mobile)
  })

  When(/^As an (.*) user login to nocommerce site$/, async function(){

  })
  When(/^Search user in customer list$/, async function(){
    
  })
