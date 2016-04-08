angular.module('optionLab').controller('loginCtrl', ['$scope', '$state', '$http',  function($scope, $state, $http){

  var urlBase = 'http://localhost:9333/login';

  $scope.loginUser = function (){
    var userCredentials = {username: $scope.username, password: $scope.password};
    $http.post(urlBase, userCredentials)
      .then(function (response){
        var user = response.data;
        $scope.username=null;
        $scope.password=null;
        $state.go('dashboard', {userIdParam: user._id})
    })
  }

}]);
