angular.module('optionLab').controller('decideCtrl', ['$scope', 'decideService', function($scope, decideService){
//decision object assembly - this will all be changed
$scope.createTitle = 'Create Decision'
$scope.factorTitle = 'Set Factors'

$scope.decision = {};
$scope.decision.choices = [{}, {}, {}];
$scope.decision.factors = ['', '', ''];


console.log($scope.decision);
console.log($scope.choices);
//slider implementation

$scope.slider = {
    value: 50,
    options: {
        floor:0,
        ceil:100,
        showSelectionBar: true,
        getSelectionBarColor: function(value) {
            if (value <= 30)
                return 'red';
            if (value <= 60)
                return 'orange';
            if (value <= 90)
                return 'yellow';
            return '#2AE02A';
        }
    }
};

//CRUD for backend
$scope.addDecision = function (){
  decideService.addDecision($scope.decision);
}

$scope.editDecision = function (){
  decideService.editDecision($scope.decision);
}

$scope.deleteDecision = function (){
  decideService.deleteDecision($scope.decision);
}

}]);
