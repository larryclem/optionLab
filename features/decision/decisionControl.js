var Decision = require('./Decision')
var User = require('../user/User')
var exports = module.exports = {};

exports.createDecision = function (req, res){
  new Decision(req.body).save(function (err, decision){
    if(err){
      return res.status(500).send(err);
    }
    User.findById(req.session.user._id, function (err, user){
      user.decisions.push(decision._id);
      user.save(function(error, savedUser){
        console.log('the updated user is ', savedUser)
        if(error){
          return res.status(500).send(err);
        }
        res.send(decision);
      })
    })
  });
};


exports.getDecision = function (req, res){
  Decision.findById(req.params.id, function (err, decision){
  	if(err){
  		return res.status(500).send(err);
  	}
  	res.send(decision);
  });
};

exports.editDecision = function (req, res){
  Decision.findByIdAndUpdate(req.params.id, req.body, function (err, decision){
  if(err){
    return res.status(500).send(err);
  }
  res.send(decision);
});
};

exports.deleteDecision = function (req, res){
  Decision.findByIdAndRemove(req.params.id, function (err, sighting){
  if(err){
    return res.status(500).send(err);
  }
  res.send(decision);
});
};
