import{$} from '@wdio/globals'
class ZohoHomepage{
    get zohoHeader(){ return $("//p[@class='before-title zh-signIn']")}
    get announcement(){ return $("//div[@class='zh_innr_nav announcement-icon announce-new']")}
}
export default new ZohoHomepage()