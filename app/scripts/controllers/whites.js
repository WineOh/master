'use strict';

angular.module('wineohApp')
  .controller('WhitesCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    var _helper = {
      init: function() {
        $scope.grapes = $rootScope.wineData.white.grape;
        $scope.wines = $rootScope.wineData.white.wine;
        $scope.selectedGrape = $scope.grapes[0];
      }
    };

    _helper.init();

    $scope.imageFromWine = function(wine) {
      return 'http://s3.amazonaws.com/wineoh-images/product/' + (parseInt(wine.wineId) + 1) + '+' + wine.wineName.toLowerCase().replace(/ /g, '') + '.png';
    }

  }]);
