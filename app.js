// Set up server

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();



app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.listen(8080);
console.log("App listening on port 8080");




module.exports = app;

