import{$,browser} from '@wdio/globals'

class ZohoLogin{
    get userName(){ return $("#login_id")}
    get nextBtn(){ return $("#nextbtn")}
    get password(){ return $("#password")}
    get signIn(){ return $("//button/span[contains(.,'Sign in')]")}

    async zohoSignIn(username, password){
        await this.userName.setValue(username)
        await browser.pause(2000)
        await this.nextBtn.click()
        await browser.pause(2000)
        await this.password.setValue(password)        
        await browser.pause(2000)
        await this.signIn.click();
    }
}
export default new ZohoLogin()