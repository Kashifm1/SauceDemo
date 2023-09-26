import {  When } from '@wdio/cucumber-framework';
import loginPage from '../../pageobjects/login.page';

When (/^I login with valid "([^"]*)?" and "([^"]*)?"$/,  
async  (username:string,password:string)=> {
    loginPage.login(username,password)
});
When (/^I login with valid username and password$/,  
async  ()=> {
    let uname= process.env.USER_NAME
    let pass_word= process.env.PASSWORD
    console.log(`==============${uname},   ${pass_word}========`)
    // await loginPage.login(process.env.USER_NAME, process.env.PASSWORD )
});