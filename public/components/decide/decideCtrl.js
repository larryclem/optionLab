angular.module('optionLab').controller('decideCtrl', ['$scope', 'decideService', function($scope, decideService){
//decision object assembly - this will all be changed
$scope.createTitle = 'Create Decision'
$scope.factorTitle = 'Set Factors'

$scope.decision = {};
$scope.decision.choices = [{}, {}, {}];
$scope.decision.factors = [{facName:'', importance:0}, {facName:'', importance:0}, {facName:'', importance:0}];

$scope

console.log($scope.decision);

//slider implementation

$scope.slider = {
    value: 50,
    options: {
        floor:0,
        ceil:100,
        showSelectionBar: true,
        getSelectionBarColor: function(value) {
            if (value <= 25)
                return 'red';
            if (value <= 50)
                return 'orange';
            if (value <= 75)
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
