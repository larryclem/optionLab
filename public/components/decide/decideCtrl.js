angular.module('optionLab').controller('decideCtrl', ['$scope', '$state', 'decideService', function($scope, $state, decideService){

//decision object assembly

$scope.decision = {
    title: ''
  , choices: [
      {choiceName:'', factorGrades: []}
    , {choiceName:'', factorGrades: []}
    , {choiceName:'', factorGrades: []}
  ]
  , factors: [
      {facName:'', weight:0}
    , {facName:'', weight:0}
    , {facName:'', weight:0}
  ]
};

var possibleTotal = $scope.decision

//calculate weighted average for each grade
$scope.calculateChoiceGrade = function (decision){
  for (var i=0; i<decision.choices.length; i++){
    var currentChoice = decision.choices[i];
    var gradeSum = 0;
    var possibleTotal = 0;
    for (var j=0; j<currentChoice.factorGrades.length; j++){
      currentChoice.factorGrades[j].weight = decision.factors[j].weight;

      gradeSum += (currentChoice.factorGrades[j].grade * decision.factors[j].weight);

      possibleTotal += (currentChoice.factorGrades[j].weight);
    }
    currentChoice.weightedScore = parseFloat((gradeSum/possibleTotal).toFixed(2));
  }
  console.log(decision);
  $state.go('decide.results');
};

//original calc to go back to
// currentChoice.weightedScore = gradeSum/(currentChoice.factorGrades.length * 100);
console.log($scope.decision);

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

//slider implementation

$scope.slider = {
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

}]);
