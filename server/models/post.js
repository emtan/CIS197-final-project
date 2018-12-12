var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
	title: { type: String, required: true },
	desc: { type: String, required: true },
	petTags: [{
		type: Schema.Types.ObjectId, ref: 'Pets'
	}],
	videoUrl: { type: String },
	streamDate: { type: Date, default: Date.now(), required: true }
});

module.exports = mongoose.model('Post', postSchema);