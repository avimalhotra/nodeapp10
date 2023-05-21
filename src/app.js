const express=require("express");
const path=require("path");
const nunjucks=require("nunjucks");
const app=express();
require("dotenv").config();
const port=process.env.PORT;

app.use(express.static(path.resolve(__dirname,'assets')));

// configure
nunjucks.configure(path.resolve(__dirname,'assets/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
}); 

app.get("/",(req,res)=>{
    res.render('index.html',{name:"Node App"});
});

app.listen(port,()=>{
    console.log("express server running on ", port)
});
