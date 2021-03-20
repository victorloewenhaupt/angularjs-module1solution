(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.name = "";

    $scope.method1 = function () {
      if($scope.name == "" || null){
       $scope.message = "Please enter data first!";
      }
      else if($scope.name.split(' ').length <= 3){
       $scope.message = "Enjoy!";
      }
      else if($scope.name.split(' ').length > 3){
        $scope.message = "Too much!";
      }
    }
  }
})();
