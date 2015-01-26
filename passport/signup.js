var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	passport.use("signup", new LocalStrategy({
		passReqToCallback : true
	},
	function(req, username, password, done) {
		findOrCreateUser = function() {
			User.findOne({ 'username' : username}, function(err, user) {
				if(err)
					return done(err);

				if(user) {
					console.log("User: " + username + " already exists");
					return done(null, false, req.flash("message", "User already exists"));
				}

				else {
					var newUser = new User();

					newUser.username = username;
					newUser.password = createHash(password);
					newUser.email = req.param("email");

					newUser.save(function(err) {
						if(err) {
							console.log("Saving user error");
							throw err;
						}

						return done(null, newUser);
					});
				}
			});
		};

		process.nextTick(findOrCreateUser);
	}));

	var createHash = function(password) {
		return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
	}
}