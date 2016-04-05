  var mongoose = require('mongoose');

  var decisionSchema = new mongoose.Schema({
      title: {type: String, required: true}
    , factors: [{
        facName: {type: String, required: true}
      , weight: {type: Number, max: 100}
    }]
    , choices: [{
        choiceName: {type: String}
      , weightedScore: {type: Number, max: 100}
      , factorGrades: [{
          facName: {type: String}
        , grade: {type: Number, required: true, max: 100}
      }]
    }]
  });

  module.exports = mongoose.model('Decision', decisionSchema);

// factor.factorName : {type: String, ref: 'Decision'}
