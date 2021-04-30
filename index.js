const express=require('express');
const app=express();
const port=8000;
const serveStatic = require('serve-static'); 
const path=require('path');
const html=require('html');

app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/LandingPage.html")
})

app.get('api/users/choose',function(req,res){
    res.sendFile(__dirname,"/public/ChooseMenu.html")
})

app.listen(port,console.log(`Server start at ${port}`));