import { Given, Then } from '@wdio/cucumber-framework';
import {  When } from '@wdio/cucumber-framework';
import { browser, expect } from "@wdio/globals";
import {  $,$$ } from '@wdio/globals'
import chai  from 'chai';

Given (/^I open the demo site$/, async function( ) {
    await browser.url("https://the-internet.herokuapp.com/tables");
    await browser.maximizeWindow()
});

When (/^I log all table elements "([^"]*)?"$/,  
async  (tableText:string)=> {
    let arr=[];
    let rowCount=await $$("//table[@id='table1']/tbody/tr").length
let colCount=await $$("//table[@id='table1']/tbody/tr/td[4]").length
    let tableContent=await $$(tableText)
for (let i = 0; i < tableContent.length; i++) {
    const element = tableContent[i].getText()
    console.log(element)
}
for(let i=0;i<rowCount;i++){
    for(let j=0;j<colCount;j++){
        let cellValue=await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText()
        let price=await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[4]`).getText()
        let firstname=await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[2]`).getText()
        if(+(price.replace("$",""))==50){
           console.log(firstname,price)
        }
    }
}

});

Then(/^I expect that the element "([^"]*)?" is diisplayed$/, async(val)=>{
    console.log("-------------------------9999999------------------")
    const product=await $(val)
    // const tt = product.getText()
    console.log(`here jhvjhbxjkdbjkvdbjkvds----- ${product.toString()}`)
    // await browser.pause(3000)

    await expect(product).toHaveText("Products")
    await expect(product).toHaveText("Products")
})

Then (/^I expect that the element "([^"]*)?" is clicked$/, async(cart)=>{
    const addcart=await $(cart)
    await addcart.click();
    // await browser.pause(3000)
    
})