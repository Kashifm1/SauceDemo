import { Given} from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";
require

Given (/^I open the sauceDemo site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
    console.log(`-------------${process.env.USER_NAME}, ${process.env.PASSWORD}-----------------------`)
});