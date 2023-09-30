import{$} from '@wdio/globals'

class PopupPage{
    get cancelOption(){ return $("//span[text()='✕']")}
    get popUpHeader(){ return $("//span[text()='Login']")}

    async cancelClick(){
        await this.cancelOption.click()
    }
    async popupText(){
        await this.popUpHeader.getText()
    }
}
export default new PopupPage()