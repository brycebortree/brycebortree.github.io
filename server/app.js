var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
