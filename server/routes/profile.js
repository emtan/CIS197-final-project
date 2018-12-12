var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Pet = require('../models/pets.js');

// POST to add pets
router.post('/addPet', function(req, res, next) {
	var newPet = new Pet(req.body.pet);
	newPet.save()
	.then(newPet => {
		res.json('Pet added successfully');
	})
	.catch(err => {
        res.status(400).send({
            message: err.message
        });
    });
});

// GET to get all profile info
router.get('/', function(req, res, next) {
	Pet.find(function(err, results) {
		if (err) {
			console.log(err);
		} else {
			res.json(results);
			console.log('Results: ' + results);
		}
	});
});

// GET edit route
router.get('/edit/:id', function(req, res, next) {
	Pet.findById(req.params.id, function(err, results) {
		if (err) {
			res.json(err);
		} else {
			res.json(results);
		}
	});
});

// POST edits
router.post('/edited/:id', function(req, res, next) {
	Pet.findById(req.params.id, function(err, results) {
		if (err) {
			res.json(err);
		} else {
			results.name = req.body.name;
			results.breed = req.body.breed;
			results.bio = req.body.bio;
			results.save()
			.then((results) => {
				res.json('finished editing!');
			})
			res.json(results);
		}
	})
})

// GET to get deleted pets
router.get('/delete/:id', function(req, res, next) {
	Pet.findByIdAndRemove({_id: req.params.id }, function(err, results) {
		if (err) {
			res.json(err);
		} else {
			res.json('removed pet!');
		}
	});
});

module.exports = router;