angular.module('optionLab').service('decideService', ['$http', '$q', function ($http, $q) {

this.addDecision = function (decision){
  var dfd = $q.defer();
  $http.post('http://localhost:9333/decisions', decision)
  .then(function (response, err){
    if(err){
      dfd.reject(err)
    }
    dfd.resolve(response.data)
    console.log('response from server is', response.data);
  })
  return dfd.promise;
}

// probably needs to exist in decisionCtrl
// this.updateDecision = function (decision){
//   return $http.put('/decisions/' + decision.id, decision)
// }

}]);
