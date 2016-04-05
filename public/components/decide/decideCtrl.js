angular.module('optionLab').controller('decideCtrl', ['$scope', 'decideService', function($scope, decideService){

//decision object assembly - this will all be changed

$scope.decision = {
    title: ''
  , choices: [{}, {}, {}]
  , factors: [
      {facName:'', weight:0}
    , {facName:'', weight:0}
    , {facName:'', weight:0}
  ]
};

//finish this
// $scope.calculateChoiceGrade = function (decision){
//
//   for (var i=0; i<decision.choices.length; i++){
//     var gradeSum;
//     decision.choices[i].weightedScore = gradeSum/(decision.choices.factorGrades.length * 100);
//     for (var j=0; j<decision.choices.factorGrades.length; j++){
//     (decision.choices.factorGrades[j].grade * decision.factors[j].weight)
//       += gradeSum;
//     }
//   }
//   return decision;
// };

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
