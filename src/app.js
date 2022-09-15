
const express =require('express')
const path = require('path')
const hbs = require('hbs')
const app =express()
const port = process.env.PORT  || 3000;

const getNews = require('./functions/news')


const partialsPath =path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname,'../templates/views')

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.get('/news',(req, res)=>{
    getNews('egypt', (err,data)=>{
        if(err){
            res.send(err)
        }
        res.render('news',{
            urlToImage:data.body.articles.urlToImage,
            title:data.body.articles.title,
            content:data.body.articles.content
        })
    })
})


const publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath))




app.listen(port, () => {console.log("Example app listening at http://localhost:" + port)})