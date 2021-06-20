const express = require("express");
const app = express();
const path= require("path")
const hbs = require('hbs')
const port = process.env.PORT || 8000

const staticPath = path.join(__dirname,"../public")

const template_static_path=path.join(__dirname,"../templates/views")

const partial_path = path.join(__dirname,"../templates/partials")
app.set('view engine', 'hbs');
//public static path
app.set('views',template_static_path)
hbs.registerPartials(partial_path)

app.use(express.static(staticPath))


//Routing
app.get("/",(req,res)=>{
    res.render("index.hbs")
})

app.get("/about",(req,res)=>{
    res.render("about.hbs")
})

app.get("/Weather",(req,res)=>{
    res.render("weather.hbs")
})

app.get("*",(req,res)=>{
    res.render('404error', {
        errorMsg: "OOps!! page not found"
    })
})


app.listen(port,()=>{
    console.log("listning to port 8000");
})