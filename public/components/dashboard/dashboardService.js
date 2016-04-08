angular.module('optionLab').service('dashboardService', function($http){

var urlBase = 'http://localhost:9333/user/';
this.getUser = function (userId){
  //userId being
  return $http.get(urlBase + userId)
}

});
