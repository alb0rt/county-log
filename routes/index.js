var express = require('express');
var router = express.Router();
var fs = require('fs');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt-nodejs');
var config = require('../config/config');

var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');
var User = mongoose.model('User');


var isAuthenticated = function(req, res, next) {
	if(req.isAuthenticated())
		return next();
	else
		res.redirect('/');
}

module.exports = function(passport) {

	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', {message: req.flash('message'), error: req.flash('error')});
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Forgot Password Page */
	router.get('/forgot', function(req, res) {
		res.render('forgot', {message: req.flash('message'), error: req.flash('error')});
	});

	/* Handle Forgot Password POST */
	router.post('/forgot', function(req, res, next) {
		async.waterfall([
			function(done) {
				crypto.randomBytes(20, function(err, buf) {
					var token = buf.toString('hex');
					done(err, token);
				});
			},
			function(token, done) {
				User.findOne({ email: req.body.email }, function(err, user) {
					if(!user){
						req.flash('error', 'Email not found');

						return res.redirect('/forgot');
					}
					user.resetPasswordToken = token;
					user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

					user.save(function(err) {
						done(err, token, user);
					});
				});
			},
			function(token, user, done) {
				var transporter = nodemailer.createTransport({
					service: 'hotmail',
					auth: {
						user: config.emailUsername,
						pass: config.emailPassword
					}
				});

				var mailOptions = {
					to: user.email,
					from: 'password-reset@county-map.com',
					subject: 'Password Reset',
					text: 'Reset your county-map password by going to http://' + req.headers.host + '/reset/' + token
				};
				transporter.sendMail(mailOptions, function(err) {
					req.flash('message', 'Email sent! :)');
					done(err, 'done');
				});				
			}

			], function(err) {
				if(err)
					return next(err);
				res.redirect('/');
			});
	});

	/* GET Password reset page */
	router.get('/reset/:token', function(req, res) {
		User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}, function (err, user) {
			if(!user) {
				req.flash('error', 'Password reset token is invalid or has expired.');
				return res.redirect('/forgot');
			}
			res.render('reset', { userDetails: req.user });
		});
	});

	/* Handle Password Reset POST */
	router.post('/reset/:token', function(req, res) {
		async.waterfall([
			function(done) {
				User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() }}, function(err, user) {
					if(!user) {
						console.log("test");
						req.flash('error', 'Password reset token is invalid or has expired.');
						res.redirect('/forgot');
					}
					console.log(user);
					user.password = req.body.password;
					user.resetPasswordToken = undefined;
					user.resetPasswordExpires = undefined;

					user.save(function(err) {
						if(err)
							return next(err);
						req.flash('message', 'Password has been changed');
						res.redirect('/');
					});
				});
			},
			function(user, done) {
				var transporter = nodemailer.createTransport({
					service: 'hotmail',
					auth: {
						user: config.emailUsername,
						pass: config.emailPassword
					}
				});
				var mailOptions = {
					to: user.email,
					from: 'password-reset@county-map.com',
					subject: 'Password Reset',
					text: 'Password successfully reset for account ' + user.username
				};
				transporter.sendMail(mailOptions, function(err) {
					req.flash('message', 'Password changed!');
					done(err);
				});
			}], function(err) {
				res.redirect('/');
			});
	})

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});




	/* GET - returns a list of all county entries */
	router.get('/entries', isAuthenticated, function (req, res, next) {
		Entry.find({username: req.user.username}, function(err, entries) {
			if (err) {
				return next(err);
			}

			res.json(entries);
		});
	});

	/* POST - creates a new county entry */
	router.post('/entries', isAuthenticated, function(req, res, next) {
		req.body.username = req.user.username;
		var entry = new Entry(req.body);

		entry.save(function(err, entries) {
			if (err) {
				return next(err);
			}

			res.json(entries);
		});
	});

	/* PUT - modifies an existing county entry */
	router.put('/entries', isAuthenticated, function(req, res, next) {
		Entry.update({id: req.body.id, username: req.user.username},  {$set: {stayed: req.body.stayed}}, function(err, entry) {
			if (err) {
				return next(err);
			}

			res.json(entry);
			
		});
	});

	/* DELETE - deletes a county entry */
	router.delete('/entries', isAuthenticated, function(req, res, next) {
		Entry.find({id: req.body.id, username: req.user.username}).remove(function (err, entries) {
			if (err) {
				return next(err);
			}

			res.json(entries);
		});
	});

	router.get('/cities', isAuthenticated, function(req, res, next) {
		fs.readFile('./public/assets/allcities.json', 'utf8', function(err, data) {
			if(err)
				return next(err);

			res.json(data);
		})
	})

	return router;

}
// module.exports = router;
