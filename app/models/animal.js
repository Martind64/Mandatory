// LOAD PACKAGES
var mongoose	= require('mongoose');
var Schema		= mongoose.Schema;

// USER SCHEMA
var AnimalSchema = new Schema(
{
	type: String,
 	gender: String,
 	weight: String,
 	speed: String 
});

module.exports = mongoose.model('Animal', AnimalSchema);
