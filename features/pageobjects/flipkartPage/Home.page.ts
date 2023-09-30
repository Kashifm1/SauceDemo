import{$,$$} from '@wdio/globals'

class HomePage{
get searchBox(){ return $('//input[@type="text"]')}
get searchButton(){ return $('//button[@type="submit"]')}
get homeTitle(){ return $("//title[contains(.,'Online Shopping')]")}

async searchProduct(product:string){
    await this.searchBox.setValue(product)
    await this.searchButton.click()
}
}
export default new HomePage()