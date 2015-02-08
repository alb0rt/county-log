// Set up server

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var config = require('./config/config');



var app = express();

// Set up mongoose
var mongoose = require('mongoose');

if (process.env.env === 'production') {
    mongoose.connect(config.mongoUri);
    console.log("Connecting to Prod Mongo");
} else {
    mongoose.connect(config.mongoUri);
    //mongoose.connect('mongodb://localhost:27017/county-log');
    console.log("Connecting to Test Mongo");
}

require('./models/Entries');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//app.use(express.static(path.join(__dirname, 'html')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride());

// Set up flash middleware
var flash = require('connect-flash');
app.use(flash());


// Set up Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({
	secret: 'countysecretkey',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var initPassport = require("./passport/init");
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use("/", routes);


app.listen(8080);
console.log("App listening on port 8080");


module.exports = app;

