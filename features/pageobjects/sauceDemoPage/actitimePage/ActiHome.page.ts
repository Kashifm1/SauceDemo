import{$} from '@wdio/globals'

class ActiHomePage{
    get tasks(){ return $('//div[text()="Tasks"]')}
    get logout(){ return $('a[id="logoutLink"]')}

    async tasksClick(){
        await this.tasks.click()
    }
}
export default new ActiHomePage()