import { $,$$ } from '@wdio/globals'

class ProductPage{
    get sauceLabBackPack (){ return $("//div/div/div[contains(.,'Swag Labs')]")}
    get cartLink () {return $("//a[@class='shopping_cart_link']") }
    get menuButton () { return $("#react-burger-menu-btn")}
    get allItems(){ return $(".inventory_item")}
    get addToCart(){return $$("//button[contains(.,'Add to cart')]")}
    get price(){ return $$("//div[@class='inventory_item_price']//div[@class='inventory_item_price']")}
    get productHeader(){return $("//span[text()='Products']")}
}
export default new ProductPage()