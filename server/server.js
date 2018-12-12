const express = require('express');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile.js');
const accountRoutes = require('./routes/account.js');
const Post = require('./models/post.js');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
var mongoDB = "mongodb://emily:emily123@ds115753.mlab.com:15753/cis197-final-project";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
	Post.find(function(err, results) {
		if (err) {
			console.log(err);
		} else {
			res.json(results);
			console.log('Results: ' + results);
		}
	});
});

app.post('/upload/submit', function(req, res, next) {
	var newPost = new Post(req.body);
	newPost.save()
	.then(newPost => {
		res.json('Post added successfuly');
	})
	.catch(err => {
		res.status(400).send({
			message: err.message
		});
	});
});

//mount pet routes at 'profile' prefix
app.use('/profile', profileRoutes);

// mount account routes at 'account' prefix
app.use('/account', accountRoutes);

// ending for next
app.use(function (err, req, res, next) {
  return res.send('ERROR :  ' + err.message)
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));