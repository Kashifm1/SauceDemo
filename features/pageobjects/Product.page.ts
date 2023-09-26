import { $ } from '@wdio/globals'

class ProductPage{
    get sauceLabBackPack (){ return $("//div/div/div[contains(.,'Swag Labs')]")}
    get cartLink () {return $("//a[@class='shopping_cart_link']") }
    get menuButton () { return $("#react-burger-menu-btn")}
    get allItems(){ return $(".inventory_item")}
    get addToCart(){return $("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']")}
}
export default new ProductPage()