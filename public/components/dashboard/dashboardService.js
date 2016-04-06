angular.module('optionLab').service('decideService', function($http, $stateParams){

var urlBase = 'http://localhost:9333/users/';
this.getUser = function (){
  return $http.get(urlBase + $stateParams.userId)
}

});
