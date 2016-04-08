  var mongoose = require('mongoose');
  var bcrypt   = require('bcrypt-nodejs');

  var userSchema = new mongoose.Schema({
        username: { type: String, required: true, index: { unique: true } }
      , password: { type: String, required: true }
    , decisions: [{
  		  type: mongoose.Schema.Types.ObjectId
  		, ref: 'Decision'
	   }]
    , tasks: [{
        type: mongoose.Schema.Types.ObjectId
      , ref: 'Task'
    }]
  });

module.exports = mongoose.model('User', userSchema);

// unused passport methods

// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };
