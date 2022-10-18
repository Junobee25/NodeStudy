var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs'); // 파일시스템 사용 기본 모듈
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views','./views_file');
app.set('view engine','jade');
app.get('/topic/new',function(req,res){
    res.render('new');
});
app.get('/topic',function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('view',{topics:files}); //view는 views_file 안에있는 템플릿파일
    })
    

});
app.post('/topic',function(req,res){ //app. ~~ 라우트
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title,description,function(err){              //function -> callback
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');

        }
        res.send('Success!');
    });
    
})
app.listen(3000,function(){
    console.log('Connected, 3000 Port!');
});