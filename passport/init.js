var login = require('./login');
var signup = require('./signup');
var User = require('../models/user');

module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		// console.log("Serializing user: ");
		// console.log(user);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			// console.log("Deserializing user: ");
			// console.log(user);
			done(err, user);
		});
	});

	login(passport);
	signup(passport);
}