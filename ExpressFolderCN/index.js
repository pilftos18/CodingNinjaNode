const express = require('express');

const app = express();


app.get('/', (req, res) => {

    res.send('Welcome to Express Server!');
});

app.listen('8180', (req, res) => {

    console.log('server listening on port 8180');
    
});