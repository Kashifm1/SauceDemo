import { $,$$,browser } from '@wdio/globals'

class ProductPage{
    get sauceLabBackPack (){ return $("//div/div/div[contains(.,'Swag Labs')]")}
    get cartLink () {return $("//a[@class='shopping_cart_link']") }
    get menuButton () { return $("#react-burger-menu-btn")}
    get allItems(){ return $(".inventory_item")}
    get addToCart(){return $$("//button[contains(.,'Add to cart')]")}
    get price(){ return $$("//div[@class='inventory_item_price']")}
    get productHeader(){return $("//span[text()='Products']")}

    async addProducts(num:number){
       let price=await this.price
       let cart=await this.addToCart
       let arr: [] = [];   
        let count=0;

        for (let i = 0; i < price.length; i++) {
         let pricesText= await price[i].getText();
         let priceIntValue = +pricesText.replace("$", "");
          (arr as number[]).push(priceIntValue)
          arr.sort((a,b)=>b-a)
        }
        
        for (let i = 0; i < price.length; i++) {
          let pricesText= await price[i].getText();
          let priceIntValue = +pricesText.replace("$", "");
          if (priceIntValue ==arr[num]) {
            await cart[i].click();
            await browser.pause(1000)
            count++
          }
         }
         
         console.log(count)
        console.log(arr)
    }
}

export default new ProductPage()