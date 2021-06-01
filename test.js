const nightmare = require('nightmare')()
const url = "https://www.flipkart.com/samsung-galaxy-m12-blue-128-gb/p/itme593a120f429d?pid=MOBGFZUHYABADANE&lid=LSTMOBGFZUHYABADANEU1FZKA&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_4481996a-2d2a-4581-b526-82062ca39923_1_1BUWY8OBA8L9_MC.MOBGFZUHYABADANE&ppt=sp&ppn=sp&otracker=clp_pmu_v2_Latest%2BSamsung%2Bmobiles%2B_3_1.productCard.PMU_V2_SAMSUNG%2BGalaxy%2BM12%2B%2528Blue%252C%2B128%2BGB%2529_samsung-mobile-store_MOBGFZUHYABADANE_neo%2Fmerchandising_2&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Latest%2BSamsung%2Bmobiles%2B_LIST_productCard_cc_3_NA_view-all&cid=MOBGFZUHYABADANE"

checkprice()

async function checkprice(){
        const priceString = await nightmare.goto(url)
                                           .wait("._30jeq3")
                                           .evaluate(() => document.querySelector("._30jeq3").innerText)
                                           .end()
        console.log(priceString)
}