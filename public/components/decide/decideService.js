angular.module('optionLab').service('decideService', function($http){

var data = $scope.decision
this.addDecision = function (decision){
  return $http.post('/decisions', decision)
}

this.updateDecision = function (decision){
  return $http.put('/decisions/' + )
}

});
