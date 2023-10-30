const express = require('express');
const {readFile, read} = require('fs'); //require modules

const app = express(); //create express app

app.get('/', (req, res) => { //create route
    readFile('./home.html', 'utf8', (err, html) => { //read file
        if(err){
            res.status(500).send('Sorry, out of order');   //error handling
        }
        res.send(html); //send response
    });
}   );

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000')); //listen on port 3000 and log message to console