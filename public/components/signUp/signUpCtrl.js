angular.module('optionLab').controller('signUpCtrl', ['$scope', '$state', '$http',  function($scope, $state, $http){

  var urlSignUp = 'http://localhost:9333/signup';

  $scope.createUser = function (){
    var userCredentials = {username: $scope.username, password: $scope.password};
    $http.post(urlSignUp, userCredentials)
    .then(function (response){
      var user = response.data;
      console.log(user);
      $scope.username = null;
      $scope.password = null;
      $state.go('dashboard', {userIdParam: user._id})
    })
  }

  // unused passPort signUp function
  // $scope.signUp = function (){
  //   var userCredentials = {local: {username: $scope.username, password: $scope.password}};
  //   $http.post(urlSignUp, userCredentials);
  //   $scope.username = null;
  //   $scope.password = null;
  // }


}]);
