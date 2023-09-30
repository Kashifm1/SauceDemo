import{$} from '@wdio/globals'

class ActitimeLogin{
    get userLogin(){ return $('//input[@id="username"]')}
    get userPassword(){ return $('//input[@name="pwd"]')}
    get userLoginBtn(){ return $('//a[@id="loginButton"]')}
    get loginTitle(){ return browser.getTitle()}

    async userLoginDetails(username, password){
        await this.userLogin.setValue(username)
        await this.userPassword.setValue(password)
        await this.userLoginBtn.click()
    }
}
export default new ActitimeLogin()