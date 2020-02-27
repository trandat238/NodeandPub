var express=require('express');
var app=express();

app.set('view engine','jade');
var port = process.env.PORT || 3000;

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

var bodyParser= require('body-Parser');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",(req,res)=> {

    res.render('index');
})
app.get('/form',(req,res)=>{
    res.render('form');
})
app.post('/saveForm',(req,res)=>{
    //lay thong tin tu textbox ten la yourName
    const yourName= req.body["yourName"];
    res.render('confirm',{name:yourName})

})

var server = app.listen(port,function() {} );