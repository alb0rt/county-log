var secrets = require('./secrets');

if (process.env.env === 'production') {

    var username = process.env.mongolab_username;
    var password = process.env.mongolab_password;

	module.exports = {
		mongoUri : 'mongodb://' + username + ':' + password + '@ds031641.mongolab.com:31641/heroku_app33202134',
		emailUsername : process.env.email_username,
		emailPassword : process.env.email_password
	}
} else {
	module.exports = {
		mongoUri : 'mongodb://localhost:27017/county-log',
		emailUsername : secrets.emailUsername,
		emailPassword : secrets.emailPassword
	}
}

