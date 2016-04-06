angular.module('optionLab').controller('dashboardCtrl', ['$scope', 'dashboardService','$state', function( $scope, dashboardService, $state, $stateParams){

$scope.getUser = function (){
  dashboardService.getUser()
}

}]);
