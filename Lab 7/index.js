const {readFile, readFileSync} = require('fs');

const txt = readFileSync('./nodeTest.txt', 'utf8');

console.log(txt);

console.log('Do this ASAP');