import {  When } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/sauceDemoPage/login.page';

When (/^I login with valid username and password$/,  
async  ()=> {
    let username= process.env.USER_NAME
    let password= process.env.PASSWORD
    console.log(`==============${username},    ${password}========`)
     await loginPage.login(username, password )
});