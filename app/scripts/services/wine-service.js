'use strict';

angular.module('wineohApp').service('WineService', function WineService() {
    return {
        findWine: function() {
            var defer;
            defer = $q.defer();
            $http.get('scripts/data/wine.json').success(function(response) {
                return defer.resolve(response);
            }).error(function(response, status) {
                return defer.reject(status);
            });
            return defer.promise;
        }
   }
});
