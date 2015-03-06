angular.module('classMarker').directive('classMarker', ['$window', function($window) {
  classGrammar = $window.classGrammar
  return {
    restrict: 'E',
    template: '<input ng-class="{invalid : isInvalid}" ng-model="classText"></input>',
    link: function($scope, el, attrs) {
      console.log(classGrammar)
      $scope.classText = "";
      $scope.isInvalid = false;
      $scope.$watch('classText', function(){
        try {
          classGrammar.parse($scope.classText);
          $scope.isInvalid = false;
        }catch(err){
          $scope.isInvalid = true;
        }
      });
    }
  }
}]);

