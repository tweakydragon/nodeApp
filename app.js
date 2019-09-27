var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/hello', function(req, res) {
    res.sendFile(__dirname + '/hello.html');
});

app.listen(7000, function() {
    console.log('listening on port 3000');
});