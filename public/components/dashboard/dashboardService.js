angular.module('optionLab').service('dashboardService', function($http, $stateParams){

var urlBase = 'http://localhost:9333/users/';
this.getUser = function (){
  //how does this get the user id?
  return $http.get(urlBase + $stateParams.userId)
}

});
