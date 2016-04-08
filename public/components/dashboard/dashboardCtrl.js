angular.module('optionLab').controller('dashboardCtrl', ['$scope', 'dashboardService','$state', 'userRef', function( $scope, dashboardService, $state, $stateParams, userRef){

$scope.user = userRef;
console.log($scope.user)

$scope.getUser = function (){
  dashboardService.getUser()
  .then(function (response){
    console.log(response.data)
    $scope.user = response.data;
    $scope.decisions = response.data.decisions;
  })
}

}]);
