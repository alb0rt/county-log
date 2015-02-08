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
					return done(null, false, req.flash("error", "Unknown error occured"));
				}

				if(!user) {
					console.log("User: " + username + " not found");
					return done(null, false, req.flash("error", "User not found."));
				}

				user.validatePassword(password, function(err, match) {
					if(err) {
						console.error(err);
						return done(null, false, req.flash("error", "Unknown error occured"));
					}
					if(!match) {
						console.log("Invalid Password");
						return done(null, false, req.flash("error", "Invalid Password"));
					} else {
						return done(null, user)
					}
				});

				}
			);
		})
	);
}