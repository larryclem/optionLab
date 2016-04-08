var User = require('./User')
var exports = module.exports = {};

exports.createUser = function (req, res){
  new User(req.body).save(function (err, user){
    if(err){
      return res.status(500).send(err);
    }
    req.session.user = user;
    res.send(user)
    // .redirect('/dashboard');
  });
};
// req.session.user._id or req.params.id
exports.getUser = function (req, res){
  User.findById(req.session.user._id)
    .populate('decisions')
    .exec(function (err, user){
  	if(err){
  		return res.status(500).send(err);
  	}
    console.log(user);
  	res.send(user);
  });
};

exports.loginUser = function (req, res){
  User.findOne({username: req.body.username}, function (err, user){
    if(!user){
      req.flash('loginMessage', 'Invalid email or password.');
      return res.status(404).send(err);
    }
    else if (req.body.password === user.password){
        req.session.user = user;
        res.send(user);
        // res.redirect('/dashboard');
      }
    else {
      req.flash('loginMessage', 'Invalid email or password.');
      return res.status(404).send(err);
    }
  });
};

exports.isLoggedIn = function (req, res, next) {
  if(req.session && req.session.user){
    User.findOne({username: req.session.user.username}, function (err, user){
      if (!user) {
        req.session.reset();
        res.redirect('/login');
      }
      else {
        next();
      }
    });
  }
  else {
    res.redirect('/login');
  }
};

//unused passport middleware function

// exports.requireAuth = function (req, res, next) {
//
//     // if user is authenticated in the session, carry on
//     if (req.isAuthenticated())
//         return next();
//
//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }
