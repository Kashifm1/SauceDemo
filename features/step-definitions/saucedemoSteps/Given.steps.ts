import { Given} from '@wdio/cucumber-framework';
import { browser} from "@wdio/globals";


Given (/^I open the sauceDemo site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
    console.log(`-------------${process.env.USER_NAME}, ${process.env.PASSWORD}-----------------------`)
});

Given(/^I go to actitime demo website$/, async function(){
    await browser.url('/login.do')
    await browser.maximizeWindow()
})

