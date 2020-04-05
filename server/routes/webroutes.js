const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.redirect('index.html');
});


app.get('/streaming', (req, res) => {
    res.redirect('streaming.html');
});


module.exports = app;