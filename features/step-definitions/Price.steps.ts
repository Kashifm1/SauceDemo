import { Given, Then } from '@wdio/cucumber-framework';
import {  When } from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";
import {  $,$$ } from '@wdio/globals'

Given (/^I open the site$/, async function( ) {
    await browser.url("/");
    await browser.maximizeWindow()
});

When (/^I login with "([^"]*)?" and "([^"]*)?"$/,  
async  (username:string,password:string)=> {
    const user=await $('#user-name')
    const pass= await $('#password')
    const loginBtn= await $('#login-button')
    await user.setValue(username)
    await pass.setValue(password)
    await loginBtn.click()
});

Then(/^I expect that element "([^"]*)?" is displayed$/, async(val)=>{
    const product=await $(val)
    await expect(product).toHaveText("Products")
})

Then (/^I store price of elements "([^"]*)?"$/, async function(price:string){
    const cprice=await $$(price)
    let cart=await $$("//button[contains(.,'Add to cart')]")
    for(let i=0;i<cprice.length;i++){
        let ptext= await cprice[i].getText()
        let intValue=await +(ptext.replace("$",""))
        //arrPrice.push(intValue)
        if(intValue==29.99){
           await cart[i].click()
           //await browser.debug()
            break
        }
    }
})