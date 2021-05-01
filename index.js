const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=8000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/LandingPage.html")
})

app.get('/api/users/choose',function(req,res){
    res.sendFile(__dirname+"/public/ChooseMenu.html")
})

app.post('/api/users/choose',function(req,res){
    console.log(1111)
    var arr=req.body.list;
    console.log(arr);
    res.send({"Success":true});
    res.render('/public/WorldCup.html',{arr});
})

app.listen(port,console.log(`Server start at ${port}`));