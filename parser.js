require('dotenv').config()
const sendmail = require('sendmail')();

const nightmare = require('nightmare')();

const url = "https://www.amazon.com/dp/B08R5CCRFD"
const minPrice = 200
const receiveremail = 'hipab35005@brayy.com'
checkprice()



async function checkprice(){
    try {
        const priceString = 
            await nightmare.goto(url)
                        .wait("#priceblock_ourprice")
                        .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
                        .end()
        const priceNumber = parseFloat(priceString.replace('$',''))
        if(priceNumber < minPrice){
            console.log("its cheap")
            await sendEmail(
                'Price Is Low',
                `The price on ${url} has dropped below ${minPrice}`
            )
        }
    } catch (e) {
        console.log(e.message)
        throw e
    }
}

function sendEmail(subject, body) {
    const email = {
        to: receiveremail,
        from: 'amazon-price-tracker@mail.com',
        subject: subject,
        text: body,
        html: body
    }
    return  sendmail(email);
}