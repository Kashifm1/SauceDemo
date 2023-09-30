import { Given} from '@wdio/cucumber-framework';
import { browser} from "@wdio/globals";


Given (/^I open the sauceDemo site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
    console.log(`-------------${process.env.USER_NAME}, ${process.env.PASSWORD}-----------------------`)
});
 Given(/^I open the zoho site$/, async function () {
    await browser.url("https://www.zoho.com/")
    await browser.maximizeWindow()

 })
 Given(/^I open the flipkart site$/,async()=>{
await browser.url("https://www.flipkart.com/")
await browser.maximizeWindow()
 })

 Given(/^Get list of (.*) from reqres.in$/, async function(){
     
 })