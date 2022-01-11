var fs = reqire('fs');
var readMe = fs.readFileSync('./scores.txt', 'utf-8');

console.log(readMe);