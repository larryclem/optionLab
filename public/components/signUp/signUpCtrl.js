angular.module('optionLab').controller('signUpCtrl', ['$scope', '$state', '$http',  function($scope, $state, $http){

  var urlBase = 'http://localhost:9333/users';

  $scope.createUser = function (){
    var userCredentials = {username: $scope.username, password: $scope.password};
    console.log(userCredentials);
    $http.post(urlBase, userCredentials)
    .success(function (response, status){
      $scope.user = response.data;
    })
  }

}]);
