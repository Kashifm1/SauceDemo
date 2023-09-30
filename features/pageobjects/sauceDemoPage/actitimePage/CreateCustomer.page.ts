import{$} from '@wdio/globals'
const data = require("../../../resource/data.json");

class createNewCustomer{
    get customerName(){return $('//input[@class="inputFieldWithPlaceholder newNameField inputNameField"]')}
    get description(){ return $('//textarea[@placeholder="Enter Customer Description"]')}
    get company(){ return $('//div[@class="emptySelection" and text()="- Select Customer -"]')}
    get createBtn(){ return $('//div[text()="Create Customer"]')}
    get header(){return $('//span[text()="Create New Customer"]')}
    get companyName(){return $(`//div[@class="itemRow cpItemRow " and text()="${data.customerCompany}"]`)}

    async createCustomer(name:string, descript:string){
        await this.customerName.setValue(name)
        await this.description.setValue(descript)
        await this.company.click()
        await this.companyName.click()
        await browser.pause(1000)
        await this.createBtn.click()
    }
}
export default new createNewCustomer()