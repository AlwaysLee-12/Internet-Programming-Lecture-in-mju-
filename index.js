const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')
const app=express();
const port=8000;
var arr=[];
var todaymenu;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');


app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/LandingPage.html")
})

app.get('/api/users/choose',function(req,res){
    res.sendFile(__dirname+"/public/ChooseMenu.html")
})

app.post('/api/users/choose',function(req,res){
    arr=req.body.list;
    res.send({"Success":true});
})

app.get('/api/users/worldcup',function(req,res){
    res.render('WorldCup',{list:arr});
})

app.post('/api/users/todayMenu',function(req,res){
    todaymenu=req.body.menu;
    res.send({"Success":true});
})

app.get('/api/users/todayMenu',function(req,res){
    res.render('FinalView',{menu:todaymenu});
})

app.listen(port,console.log(`Server start at ${port}`));