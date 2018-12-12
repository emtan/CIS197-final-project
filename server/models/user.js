var mongoose = require('mongoose')
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  img: { data: Buffer, contentType: String },
  ownedPets: [{
  	type: Schema.Types.ObjectId, ref: 'Pets'
  }],
  subscribedPets: [{
  	type: Schema.Types.ObjectId, ref: 'Pets'
  }]
})

module.exports = mongoose.model('User', userSchema);