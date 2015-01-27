var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	passport.use("login", new LocalStrategy({
		passReqToCallback: true
	},
	function(req, username, password, done) {
		User.findOne({'username' : username.toLowerCase()},
			function(err, user) {
				if(err){
					console.error(err);
					return done(null, false, req.flash("message", "Unknown error occured"));
				}

				if(!user) {
					console.log("User: " + username + " not found");
					return done(null, false, req.flash("message", "User not found."));
				}

				if(!isValidPassword(user, password)) {
					console.log("Invalid Password");
					return done(null, false, req.flash("message", "Invalid Password"));
				}

				return done(null, user);
				}
			);
		})
	);

	var isValidPassword = function(user, password) {
		// TODO: change to async method
		return bcrypt.compareSync(password, user.password);
	}
}