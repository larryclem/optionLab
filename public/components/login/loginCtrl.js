angular.module('optionLab').controller('loginCtrl', ['$scope', '$state', '$http',  function($scope, $state, $http){

  var urlBase = 'http://localhost:9333/login';

  $scope.loginUser = function (){
    var userCredentials = {username: $scope.username, password: $scope.password};
    console.log(userCredentials);
    $http.post(urlBase, userCredentials)
    .success(function (response, status){
      $scope.user = response.data;
    })
  }

}]);
