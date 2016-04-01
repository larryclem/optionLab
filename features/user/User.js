  var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({
      username: { type: String, required: true, index: { unique: true } }
    , password: { type: String, required: true }
    , decisions: [{
  		  type: String
  		, ref: 'Decision'
	   }]
  });

  module.exports = mongoose.model('User', User);
