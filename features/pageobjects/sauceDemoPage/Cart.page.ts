import{$,$$} from '@wdio/globals'

class Cart{
    get checkoutButton(){ return $('#checkout')}
    get continueShoppingBtn(){ return $('#continue-shopping')}
    get cartItem(){ return $$("//div[@class='cart_item']")}

async checkoutClick() {
    await this.checkoutButton.click()
}
async continueShoppingClick() {
    await this.continueShoppingBtn.click()
}
async cartItems(){
    await this.cartItem.length
}
}
export default new Cart()