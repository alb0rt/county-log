var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	passport.use("login", new LocalStrategy({
		passReqToCallback: true
	},
	function(req, username, password, done) {
		User.findOne({'username' : username},
			function(err, user) {
				if(err)
					return done(err);

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
		return bcrypt.compareSync(password, user.password);
	}
}