angular.module('optionLab').service('dashboardService', function($http, $q){

var urlBase = 'http://localhost:9333/user/';
var urlDuh = 'user/'


this.getUser = function (userId){
  console.log('service call is' + userId)
  var dfd = $q.defer();
  return $http.get(urlDuh + userId)

}

});
