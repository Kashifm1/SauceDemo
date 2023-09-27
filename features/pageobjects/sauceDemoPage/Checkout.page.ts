import{$} from '@wdio/globals'

class CheckoutPage{
    get firstNameInput(){ return $('#first-name')}
    get lastNameInput(){ return $('#last-name')}
    get postalcodeInput(){ return $('#postal-code')}
    get continueBtn(){ return $("input[name='continue']")}
    get cancelBtn(){ return $("button[name='cancel']")}

async checkoutDetails(firstname:string, lastName:string, postalCode:string) {
    await this.firstNameInput.setValue(firstname)
    await this.lastNameInput.setValue(lastName)
    await this.postalcodeInput.setValue(postalCode)
    await this.continueBtn.click()
}
}
export default new CheckoutPage()