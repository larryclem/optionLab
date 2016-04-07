  var mongoose = require('mongoose');
  var bcrypt   = require('bcrypt-nodejs');

  var userSchema = new mongoose.Schema({
      local: {
        username: { type: String, required: true, index: { unique: true } }
      , password: { type: String, required: true }
      }
    , decisions: [{
  		  type: String
  		, ref: 'Decision'
	   }]
  });

  // generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


  module.exports = mongoose.model('User', userSchema);
