import { Given} from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";
const data=require('../../resource/data.json')

Given (/^I open the sauceDemo site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
    console.log(`-------------${process.env.USER_NAME}, ${process.env.PASSWORD}-----------------------`)
    //console.log(data)
});
 Given(/^I open the flipkart site$/, async function () {
    await browser.url("https://www.flipkart.com/")
    await browser.maximizeWindow()
    
 })