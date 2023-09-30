import{$,$$} from '@wdio/globals'

class ApplePage{
    get appleProducts(){return $$('//div[@class="_4rR01T"]')}
    get applePrice(){return $$('//div[@class="_30jeq3 _1_WHN1"]')}

    async productDetails(){
        const products=await this.appleProducts
        const prices=await this.applePrice
        for(let i=0;i<products.length;i++){
            let productText=await products[i].getText()
            let price=await prices[i].getText()
            console.log(productText,price);
        }
    }
}
export default new ApplePage()