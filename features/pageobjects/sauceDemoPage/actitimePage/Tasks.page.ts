import{$} from '@wdio/globals'

class Tasks{
    get addNew(){ return $("//div[text()='Add New']")}
    get newCustomer(){ return $('//div[@class="item createNewCustomer"]')}
    get newProject(){ return $('//div[@class="item createNewProject"]')}
}
export default new Tasks()