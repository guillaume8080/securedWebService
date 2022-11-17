
var express = require('express');
var app = express();

const recordToken = require("./controllers");


app.listen(3000)

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/record', function(req, res) {

    const retour = recordToken;

    res.send(retour);
});

