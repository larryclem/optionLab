angular.module('optionLab').service('dashboardService', function($http, $q){

var urlBase = 'http://localhost:9333/user/';

this.getUser = function (userId){
  console.log('the user id from the service call is ' + userId)
  var dfd = $q.defer();
  $http.get(urlBase + userId)
  .then(function (response, err){
    if(err){
      dfd.reject(err)
    }
    dfd.resolve(response.data)
    console.log('response from server is', response.data);
  })
  return dfd.promise;
}

});
