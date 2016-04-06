var Decision = require('./Decision')
var exports = module.exports = {};

exports.createDecision = function (req, res){
  new Decision(req.body).save(function (err, decision){
    if(err){
      return res.status(500).send(err);
    }
    res.send(decision);
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
