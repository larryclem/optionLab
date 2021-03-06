angular.module('optionLab').controller('decideCtrl', ['$scope', 'decideService', '$state', function($scope, decideService, $state){

//decision object assembly

$scope.decision = {
    title: ''
  , choices: [
      {choiceName:'', factorGrades: [{}, {}, {}]}
    , {choiceName:'', factorGrades: [{}, {}, {}]}
    , {choiceName:'', factorGrades: [{}, {}, {}]}
  ]
  , factors: [
      {facName:'', weight:0}
    , {facName:'', weight:0}
    , {facName:'', weight:0}
  ]
};

//add & remove choices and factors
$scope.newChoice = {choiceName:'', factorGrades: [{}, {}, {}]};
$scope.addChoice = function (newChoice){
  $scope.decision.choices.push(newChoice)
};

$scope.removeChoice = function () {
  $scope.decision.choices.pop();
}

$scope.newFactor = {facName:'', weight:0};
$scope.addFactor = function (newFactor){
  $scope.decision.factors.push(newFactor)
};

$scope.removeFactor = function () {
  $scope.decision.factors.pop();
}

//calculate weighted average for options
$scope.calculateChoiceGrade = function (decision){
  for (var i=0; i<decision.choices.length; i++){
    var currentChoice = decision.choices[i];
    var gradeSum = 0;
    var possibleTotal = 0;
    for (var j=0; j<currentChoice.factorGrades.length; j++){
      console.log(decision.factors);

      currentChoice.factorGrades[j].weight = decision.factors[j].weight;

      gradeSum += (currentChoice.factorGrades[j].grade * decision.factors[j].weight);

      possibleTotal += (currentChoice.factorGrades[j].weight);
    }
    currentChoice.weightedScore = parseFloat((gradeSum/possibleTotal).toFixed(2));
  }
  console.log(decision);
  addDecision();
  // $state.go('decide.results');
};

//CRUD for backend
var addDecision = function (){
  decideService.addDecision($scope.decision)
  .then(function(response){
    $state.go('decide.results');
  })
}

$scope.updateDecision = function (){
  decideService.updateDecision($scope.decision);
}

//cycle through options in rateOptions view
$scope.currentOption = 0;

$scope.nextOption = function(){
  $scope.currentOption++;
}

$scope.previousOption = function(){
  $scope.currentOption--;
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

//sets option sliders to 0; used in goRate();
var setOptionSliders = function (){
  for (var i=0; i<$scope.decision.choices.length; i++){
    var currentChoice = $scope.decision.choices[i];

    for (var j=0; j<currentChoice.factorGrades.length; j++){
      currentChoice.factorGrades[j].grade = 0;
    }
  }
};

//cleans up empty factors/options and sets option sliders to 0
$scope.goRate = function (){
for (var i=0; i<$scope.decision.choices.length; i++){
  if(!$scope.decision.choices[i].choiceName){
    $scope.decision.choices.splice(i, 1);
  }
}

for (var i=0; i<$scope.decision.factors.length; i++){
  if (!$scope.decision.factors[i].facName){
    $scope.decision.factors.splice(i, 1);
    for (var j=0; j<$scope.decision.choices.length; j++){
      $scope.decision.choices[j].factorGrades.splice(i, 1);
    }
  }
}
setOptionSliders();
console.log($scope.decision);
// decideService.addDecision; maybe do this here later.
$state.go('decide.rateOptions');
}

//sets rate options sliders to 0 on start
// for (var i=0; i<$scope.decision.choices.length; i++){
//   var currentChoice = $scope.decision.choices[i];
//
//   for (var j=0; j<currentChoice.factorGrades.length; j++){
//     currentChoice.factorGrades[j].grade = 0;
//   }
// }

//original calc to go back to for calculateChoiceGrade;
// currentChoice.weightedScore = gradeSum/(currentChoice.factorGrades.length * 100);
// console.log($scope.decision);

}]);
