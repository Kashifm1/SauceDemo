import{$} from '@wdio/globals'

class ZohoSignIn{
    get signIn(){return $("//a[contains(.,'Sign in')]")}
    get signUp(){ return $("//div[@class='signupcontainer']/a[contains(.,'Sign up')]")}
    get title(){ return $("//title[text()='Zoho | Cloud Software Suite for Businesses']")}
    async signUpText(){
        await this.signUp.getText()
    }
    async signInClick(){
        await this.signIn.click()
    }
}
export default new ZohoSignIn()