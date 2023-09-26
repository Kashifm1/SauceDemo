import{$} from '@wdio/globals'

class Cart{
    get checkoutButton(){ return $('#checkout')}
    get continueShoppingBtn(){ return $('#continue-shopping')}
    get cartItem(){ return $("//div/a[@id='item_4_title_link']")}

async checkoutClick() {
    await this.checkoutButton.click()
}
async continueShoppingClick() {
    await this.continueShoppingBtn.click()
}
}
export default new Cart()