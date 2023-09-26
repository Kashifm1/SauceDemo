import {  When } from '@wdio/cucumber-framework';
// import { browser, expect } from "@wdio/globals";
// import {  $ } from '@wdio/globals'
import loginPage from '../../pageobjects/login.page';

When (/^I login with "([^"]*)?" and "([^"]*)?"$/,  
async  (username:string,password:string)=> {
    loginPage.login(username,password)
});