'use strict';

angular.module('wineohApp')
.controller('WhitesCtrl', ['$scope', '$rootScope', 'WineService', '$location', function ($scope, $rootScope, WineService, $location) {

  var _helper = {
    init: function() {
      $rootScope.selectedWine = true;
      $scope.selectedWine = $rootScope.selectedWine;
      $scope.grape = [];
      $scope.wines = [];
      $scope.selectedGrape = [];

      WineService.findWine().then(function(result){
        // console.log('YOUR RESULT IS = ' + JSON.stringify(result));
        $scope.wines = result;
      });
    }
  };

  _helper.init();

  $scope.toggle = function(){
    console.log('TOGGLE IS = ');
    $location.path('/reds');
  }

  $scope.imageFromWine = function(wine) {
    return 'http://s3.amazonaws.com/wineoh-images/product/' + (parseInt(wine._id) + 1) + '%20' + wine.Name.toLowerCase().replace(/ /g, '') + '.png';
  }

}]);
