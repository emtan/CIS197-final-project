var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const petsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	breed: { type: String, required: true },
	owner: { type: String },
	bio: { type: String, required: true },
    img: { data: Buffer, contentType: String },
	subscribers: [{ 
		type: Schema.Types.ObjectId, ref: 'User'
	}]
});

module.exports = mongoose.model('Pets', petsSchema);