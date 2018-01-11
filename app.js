const fs = require('fs');

console.log('app');

fs.writeFile('test.txt', 'hello world', 'utf8', err => {
    console.log('写入完毕')
});

