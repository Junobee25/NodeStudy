var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.locals.pretty = true;
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('public')); //정적인 서비스 추가하고 싶다!
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/form',function(req,res){
    res.render('form');
});
app.get('/form_receiver',function(req,res){
    
    var title = req.query.title;
    var description=req.query.description;
    res.send(title+','+description);
});
app.post('/form_receiver',function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title + ',' + description)
})
app.get('/topic/:id',function(req,res){
    
    var topics =[
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output = `
        <a href ="/topic/0">JavaScript</a><br>
        <a href ="/topic/1">Nodejs</a><br>
        <a href ="/topic/2">Express</a><br>
        ${topics[req.params.id]}

    `
    res.send(output);
});
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+','+req.params.mode)
});

app.get('/template',function(req,res){
    res.render('temp',{time:Date(),_title:'Jade'});
});
app.get('/', function(req,res){ //get 쓸때 매개변수 값은 약속되있음
    res.send('Hello home page');
});
app.get('/dynamic',function(req,res){
    var lis ='';
    for(var i =0;i<5;i++){
        lis = lis+'<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output)
});
app.get('/route',function(req,res){
    res.send('Hello Router,<img src="/nodejs.png">')
});
app.get('/login',function(res,res){ //해당경로에서 어떤걸 실행시켜줄 것인가?
    res.send('<h1>Login please</h1>');     //라우터~ 사용자 -> 라우터(중개get) -> controller(console)
});
app.listen(3000,function(){
    console.log('Connected 3000 port!')
}); //3000 -> 3000번 port를 리스닝