var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET - returns a list of all county entries */
router.get('/entries', function (req, res, next) {
	Entry.find(function(err, entries) {
		if (err) {
			return next(err);
		}

		res.json(entries);
	});
});

/* POST - creates a new county entry */
router.post('/entries', function(req, res, next) {
	var entry = new Entry(req.body);

	entry.save(function(err, entries) {
		if (err) {
			return next(err);
		}

		res.json(entries);
	});
});

/* DELETE - deletes a county entry */
router.delete('/entries', function(req, res, next) {
	Entry.find({id: req.body.id}).remove(function (err, entries) {
		if (err) {
			return next(err);
		}

		res.json(entries);
	});
});


module.exports = router;
