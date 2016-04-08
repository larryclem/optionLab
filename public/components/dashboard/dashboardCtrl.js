angular.module('optionLab').controller('dashboardCtrl', ['$scope', 'dashboardService', 'userData', '$http', function($scope, dashboardService, userData, $http){

$scope.user = userData;
$scope.decisions = userData.decisions;

$scope.logout = function (){
  $http.get('/logout');
}

// $scope.getUser = function (){
//   dashboardService.getUser()
//   .then(function (response){
//     console.log(response.data)
//     $scope.user = response.data;
//     $scope.decisions = response.data.decisions;
//   })
// }

}]);
