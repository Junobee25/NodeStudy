const http = require('http'); 
 
const hostname = '127.0.0.1'; //ip
const port = 1338;
  
http.createServer((req, res) => { // createServer라는 명령을 통해 서버를 만듬
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {  // 서버가 컴퓨터에 Listening 하게 시킴
  console.log(`Server running at http://${hostname}:${port}/`);
});