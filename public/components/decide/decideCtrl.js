angular.module('optionLab').controller('decideCtrl', ['$scope', 'decideService', function($scope, decideService){

//decision object assembly - this will all be changed

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

//finish this
$scope.calculateChoiceGrade = function (decision){

  for (var i=0; i<decision.choices.length; i++){
    var currentChoice = decision.choices[i];
    var gradeSum = 0;
    for (var j=0; j<currentChoice.factorGrades.length; j++){

      gradeSum += (currentChoice.factorGrades[j].grade * decision.factors[j].weight)

    }
    currentChoice.weightedScore = gradeSum/(currentChoice.factorGrades.length * 100);
  }
  console.log('the final decision object is ' + decision);
  return decision;
};

console.log($scope.decision);

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
