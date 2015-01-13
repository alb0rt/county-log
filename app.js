// Set up server

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();

// Set up mongoose
var mongoose = require('mongoose');

if (app.get('env') === 'development') {
    mongoose.connect('mongodb://localhost:27017/county-log');
    console.log("Connecting to Test Mongo");
} else {
    //mongoose.connect('mongodb://skronch:qwe123@ds035270.mongolab.com:35270/heroku_app29348857');
    console.log("Connecting to Prod Mongo");
}


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

// Model for county list

var CountyList = mongoose.model("CountyLog", {
    id : String,
    name : String
});


// API Routes



module.exports = app;

