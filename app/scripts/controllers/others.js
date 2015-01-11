'use strict';

angular.module('wineohApp')
  .controller('OthersCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    var _helper = {
      init: function() {
        $scope.grapes = $rootScope.wineData.other.grape;
        $scope.wines = $rootScope.wineData.other.wine;
        $scope.selectedGrape = $scope.grapes[0];
      }
    };

    _helper.init();

    $scope.imageFromWine = function(wine) {
      return 'http://s3.amazonaws.com/wineoh-images/product/' + wine.wineId + '%20' + wine.wineName.toLowerCase().replace(/ /g, '') + '.png';
    }

  }]);
