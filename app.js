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


if (process.env.env === 'development') {
    mongoose.connect('mongodb://localhost:27017/county-log');
    console.log("Connecting to Test Mongo");
} else {
    var username = process.env.mongolab_username;
    var password = process.env.mongolab_password;
    mongoose.connect('mongodb://' + username + ':' + password + '@ds031641.mongolab.com:31641/heroku_app33202134');
    console.log("Connecting to Prod Mongo");
}

require('./models/Entries');

var routes = require('./routes/index');

app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

app.use("/", routes);

app.listen(8080);
console.log("App listening on port 8080");


module.exports = app;

