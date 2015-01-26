var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');

var isAuthenticated = function(req, res, next) {
	if(req.isAuthenticated())
		return next();
	else
		res.redirect('/');
}

module.exports = function(passport) {

	/* GET home page. */
	router.get('/', function(req, res) {
		res.render('index', {message: req.flash('message')});
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

	return router;

}
// module.exports = router;
