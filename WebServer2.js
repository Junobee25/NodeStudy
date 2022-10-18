const http = require('http'); //WebServer가 되기위해서는 Nodejs가 제공하는 모듈중에 http라는 모듈을 require한 다음에 변수에 담음

const hostname = '127.0.0.1';
const port = 1337;


var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
});

server.listen(port,hostname,function(){ //비동기 방식

    console.log(`Server running at http://${hostname}:${port}/`);

});