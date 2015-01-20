'use strict';

angular.module('wineohApp')
  .controller('RedsCtrl', ['$scope', '$rootScope', 'WineService', '$location', function ($scope, $rootScope, WineService, $location) {

    var _helper = {
      init: function() {
        $rootScope.selectedWine = false;
        $scope.selectedWine = $rootScope.selectedWine;
        $scope.wines = [];
        $scope.selectedGrape = [];

        WineService.findWine().then(function(result){
          // console.log('YOUR RESULT IS = ' + JSON.stringify(result));
          $scope.wines = result;
          $scope.grapes = [];
          for (var i=0; i<result.length; i++){
            var wine = result[i];
            $scope.grapes.push(wine.Grape);
            // console.log('wine =' + JSON.stringify(wine));
          }
          $scope.grapes.sort();
        });
      }
    };

    _helper.init();

    $scope.toggle = function(){
      console.log('TOGGLE IS = ');
      $location.path('/whites');
    }

    $scope.imageFromWine = function(wine) {
      return 'http://s3.amazonaws.com/wineoh-images/product/' + (parseInt(wine._id) + 1) + '%20' + wine.Name.toLowerCase().replace(/ /g, '') + '.png';
    }



  }]);
