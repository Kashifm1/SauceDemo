import{$} from '@wdio/globals'
class CheckoutCompletePage{
    get thankYou(){ return $("//h2[text()='Thank you for your order!']")}
    get backHomeBtn(){ return $("#back-to-products")}

    async thankYouMsg(){
        let thankYouText=await this.thankYou.getText()
    }
}
export default new CheckoutCompletePage()