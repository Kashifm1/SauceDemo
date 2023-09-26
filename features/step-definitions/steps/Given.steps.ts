import { Given} from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";

Given (/^I open the sauceDemo site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
});