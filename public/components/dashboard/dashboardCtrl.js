angular.module('optionLab').controller('dashboardCtrl', ['$scope', 'dashboardService', 'userData', function( $scope, dashboardService, userData){

$scope.user = userData;
$scope.decisions = userData.decisions;

console.log('the user on scope will be ' , userData);
setTimeout(function (){
  console.log('the user on scope after 2 secs will be ' , userData)
}, 2000)

// $scope.getUser = function (){
//   dashboardService.getUser()
//   .then(function (response){
//     console.log(response.data)
//     $scope.user = response.data;
//     $scope.decisions = response.data.decisions;
//   })
// }

}]);
