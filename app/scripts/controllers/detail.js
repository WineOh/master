'use strict';

angular.module('wineohApp')
  .controller('DetailCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    var _helper = {
      init: function() {
        $scope.wines = $rootScope.wineData;
      }
    };

    _helper.init();

    $scope.imageFromWine = function(wine) {
      return 'http://s3.amazonaws.com/wineoh-images/product/' + (parseInt(wine.wineId) + 1) + '+' + wine.wineName.toLowerCase().replace(/ /g, '') + '.png';
    }

  }]);
