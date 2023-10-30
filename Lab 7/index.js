const {readFile} = require('fs').promises;

async function main() {
    const data = await readFile('file.txt', 'utf8');
    console.log(data);
    }