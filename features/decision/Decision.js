  var mongoose = require('mongoose');

  var decisionSchema = new mongoose.Schema({
      name: {type: String, required: true}
    , factors: [{
        factorName: {type: String, required: true}
      , weight: {type: Number, max: 100}
    }]
    , options: [{
        optionName: {type: String}
      , factorGrades: [{
          factor.factorName: {type: String, ref: 'Decision'}
        , grade: {type: Number, required: true, max: 100}
      }]
    }]
  });

  module.exports = mongoose.model('Decision', Decision);

// factor.factorName : {type: String, ref: 'Decision'}
