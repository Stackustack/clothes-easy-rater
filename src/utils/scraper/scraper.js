import appCountries from './countriesApps'

const axios = require('axios')
const cheerio = require('cheerio')

const fetchAllDataProduct = async (productNum) => {
    let prodData = {
        countriesData: []
    }

    return Promise.all(
        appCountries.map(countryApp => {

            return scrapWebPage(countryApp, productNum).then(parsedWebPage => {
                let countryData = {}

                if (countryApp.countryCode === 'pl') {
                    prodData.productImage = parsedWebPage.image
                    prodData.productColour = parsedWebPage.color
                    prodData.productName = parsedWebPage.name
                }

                countryData.countryCode  = countryApp.countryCode
                countryData.ratingCount  = parsedWebPage.aggregateRating.ratingCount
                countryData.ratingValue  = parsedWebPage.aggregateRating.ratingValue
                countryData.reviews      = parsedWebPage.reviews

                return countryData
            });
        })   
    ).then(results => {
        prodData.countriesData = results
        return prodData;
    });
}

const scrapWebPage = async (countryAppData, productNumber) => {
    const mainUrl = process.env.REACT_APP_SHOP_MAIN_URL
    const shopUrl = `https://www.${mainUrl}.${countryAppData.countryCode}/${countryAppData.catalogTranslation}/?q=${productNumber}`
    const avoidCORSUrl = 'https://allorigins.me/get?url=' + shopUrl + '&callback=?'

    return await axios
        .get(avoidCORSUrl, {xmlMode: false, normalizeWhitespace: true})
        .then(response => {
            const $ = cheerio.load(response.data)
            let scrapedWebPageJson
            
            $("script").get().forEach((obj, idx) => {  
                if (obj.attribs.type === '\\"application/ld+json\\"') {
                    const content = obj.children[0].data
                    const contentForParsing = content.replace(/\\n/g,"").replace(/\\/g,"")

                    scrapedWebPageJson = JSON.parse(contentForParsing)
                }
            })

            return scrapedWebPageJson
        })
}

export default fetchAllDataProduct
