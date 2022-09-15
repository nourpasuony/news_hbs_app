
const request = require('request')

const getNews =(searchKeyWord , callBack)=>{
    const url = "https://newsapi.org/v2/everything?q="+searchKeyWord + "&from=2022-08-15&sortBy=publishedAt&apiKey=642486678816478d916e4ba3d8aeba1e"
    request.get({url,json:true}, (error, data)=>{
        if(error){
            callBack("error is occure" , undefined)
        }else if(data.body.status == "error"){
            callBack(data.body.error.message, undefined)
        }
        else {
            callBack(undefined, data)
        }
    })
}


module.exports = getNews


