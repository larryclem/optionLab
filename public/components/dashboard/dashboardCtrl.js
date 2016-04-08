angular.module('optionLab').controller('dashboardCtrl', ['$scope', 'dashboardService', 'userRef', function( $scope, dashboardService, userRef){

$scope.user = userRef;
console.log('the user on scope will be ' , userRef);
setTimeout(function (){
  console.log('the user on scope after 2 secs will be ' , userRef)
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
