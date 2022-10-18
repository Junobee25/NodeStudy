var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

console.log(2);
fs.readFile('data.txt',{encoding:'utf8'}, function(err,data){   //readFile이 실행되고 console.log(4)가 실행되고 reaFile이 실행이 끝나는 타이밍에 console
    console.log(3);
    console.log(data);


});
console.log(4);