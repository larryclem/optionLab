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

exports.requireAuth = function (req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
