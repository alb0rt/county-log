// Model for user

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date
});

userSchema.pre('save', function(next) {
	var user = this;
	if(!user.isModified('password'))
		return next();

	bcrypt.genSalt(10, function(err, salt) {
		if(err) 
			return next(err);

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err)
				return next(err);

			user.password = hash;
			next();
		});
	});
	
});

userSchema.methods.validatePassword = function(testPassword, callback) {
	bcrypt.compare(testPassword, this.password, function(err, match) {
		if(err)
			return callback(err);

		callback(null, match);
	});
}

module.exports = mongoose.model("User", userSchema);