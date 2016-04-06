var User = require('./User')
var exports = module.exports = {};

exports.createUser = function (req, res){
  new User(req.body).save(function (err, user){
    if(err){
      return res.status(500).send(err);
    }
    res.send(user);
  });
};


exports.getUser = function (req, res){
  User.findById(req.params.id, function (err, user){
  	if(err){
  		return res.status(500).send(err);
  	}
  	res.send(user);
  });
};
