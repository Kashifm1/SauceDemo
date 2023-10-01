import{$} from '@wdio/globals'
class CheckoutOverviewPage{
    get finishBtn(){return $("button[name='finish']")}
    get cancelBtn(){return $("button[name='cancel']")}

async finishClick() {
    await this.finishBtn.click()
}
}
export default new CheckoutOverviewPage()