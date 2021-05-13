const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')
const app=express();
const port=8000;
let menuList=[];  //선택된 메뉴 정보 배열
let todaymenu;    //최종적으로 선택된 메뉴

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname,'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

//root url get 요청시 랜딩 페이지 html 파일 띄워줌
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/LandingPage.html")
})

//해당 url로 get 요청이 오면 다음 html 페이지 띄워줌
app.get('/api/users/choose',function(req,res){
    res.sendFile(__dirname+"/public/ChooseMenu.html")
})

//해당 url로 post 요청이 오면 menuList에 선택된 메뉴들을 넣어주고 json 형식으로 성공 응답 보내줌
app.post('/api/users/choose',function(req,res){
    menuList=req.body.list;
    res.send({"Success":true});
})

//해당 url로 get 요청이 오면 해당 html 페이지를 로딩시켜주고, 선택된 메뉴 정보를 로딩된 페이지에 전달
app.get('/api/users/worldcup',function(req,res){
    res.render('WorldCup',{list:menuList});
})

//해당 url로 post 요청이 오면, 최종 선택된 메뉴 정보를 받고, json 형식으로 성공 응답 보내줌
app.post('/api/users/todayMenu',function(req,res){
    todaymenu=req.body.menu;
    res.send({"Success":true});
})

//해당 url로 get 요청이 오면, 최종 html 페이지를 로딩시켜주고, 로딩된 페이지에 최종 선택된 메뉴 정보를 전달
app.get('/api/users/todayMenu',function(req,res){
    res.render('FinalView',{menu:todaymenu});
})

app.listen(port,console.log(`Server start at ${port}`));