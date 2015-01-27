var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	passport.use("signup", new LocalStrategy({
		passReqToCallback : true
	},
	function(req, username, password, done) {

		var usernameLower = username.toLowerCase();

		findOrCreateUser = function() {
			User.findOne({ 'username' : usernameLower}, function(err, user) {
				if(err) {
					console.error(err);
					return done(null, false, req.flash("message", "Unknown error occured"));
				}

				if(user) {
					console.log("User: " + username + " already exists");
					return done(null, false, req.flash("message", "User already exists"));
				}

				else {
					User.findOne({'email' : req.param("email")}, function(err, user) {
						if(err){
							console.error(err);
							return done(null, false, req.flash("message", "Unknown error occured"));
						}

						if(user) {
							console.log("Email: " + req.param("email") + " already exists");
							return done(null, false, req.flash("message", "Email already exists"))
						}

						else {
							var newUser = new User();

							newUser.username = usernameLower;
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
				}
			});
		};

		process.nextTick(findOrCreateUser);
	}));

	var createHash = function(password) {
		// TODO: Change to async method
		return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
	}
}