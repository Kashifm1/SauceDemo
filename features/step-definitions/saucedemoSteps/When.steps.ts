import {  When } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/sauceDemoPage/login.page';
import LoginPage from '../../pageobjects/sauceDemoPage/actitimePage/Login.page';
const data = require("../../resource/data.json");


When (/^I login with valid username and password$/,  
async  ()=> {
    let username= process.env.USER_NAME
    let password= process.env.PASSWORD
     await loginPage.login(username, password )
});

When(/^I login with valid actitime username and password$/, async function(){
    await LoginPage.userLoginDetails(process.env.ACTI_USERNAME, process.env.ACTI_PASSWORD)
})

