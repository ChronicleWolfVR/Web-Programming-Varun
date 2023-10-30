const express = require('express');
const {readFile, read} = require('fs');

const app = express();

app.get('/', (req, res) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err){
            res.status(500).send('Sorry, out of order');
        }
        res.send(html);
    });
}   );

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));