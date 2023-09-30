import{$} from '@wdio/globals'
const data = require("../../../resource/data.json");

class createNewProjectPage{
    get projectHeader(){return $(`//span[text()='Create New Project']`)}
    get projectName(){ return $(`//input[@class="projectNameField inputFieldWithPlaceholder inputNameField"]`)}
    get projectCustomer(){return $(`//div[text()='-- Please Select Customer to Add Project for  --']`)}
    get customerDropdown(){ return $(`//span[text()="Create New Project"]/ancestor::div//div[@class="itemRow cpItemRow " and text()="${data.projectCustomerName}"]`)}
    get projectDescription(){ return $(`//textarea[@placeholder="Add Project Description"]`)}
    get taskName(){ return $(`(//input[@placeholder="Enter task name"])[1]`)}
    get createProject(){ return $(`//div[text()="Create Project"]`)}

    async createProjectDetails(pName:string, pDescription:string, pTaskName:string){
       await this.projectName.setValue(pName)
       await browser.pause(1000)
       await this.projectDescription.setValue(pDescription)
       await browser.pause(1000)
       await this.taskName.setValue(pTaskName)
       await browser.pause(1000)
       await this.createProject.click()
    }
}
export default new createNewProjectPage()