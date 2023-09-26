import{$} from '@wdio/globals'

class Cart{
    get checkoutButton(){ return $('#checkout')}
    get continueShoppingBtn(){ return $('#continue-shopping')}
    
async checkoutClick() {
    await this.checkoutButton.click()
}
async continueShoppingClick() {
    await this.continueShoppingBtn.click()
}
}
export default new Cart()