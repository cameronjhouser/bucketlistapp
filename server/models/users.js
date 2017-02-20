var mongoose = require('mongoose');

var Schema = new Schema({
	email: {
		type: String,
		unique: true, 
		lowercase: true
	},
	password: String
});

var model = mongoose.model('user', userScema);

module.exports = model;
