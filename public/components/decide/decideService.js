angular.module('optionLab').service('decideService', function($http){

var urlBase = 'http://localhost:9333/decisions';

this.addDecision = function (decision){
  return $http.post(urlBase, decision)
}

// probably needs to exist in decisionCtrl
// this.updateDecision = function (decision){
//   return $http.put('/decisions/' + decision.id, decision)
// }

});
