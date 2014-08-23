'use strict';

angular.module('wineohApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider)
{
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainCtrl'
  })
  .when('/detail/:id', {
    templateUrl: 'views/detail.html',
    controller: 'DetailCtrl'
  })
  .when('/error', {
    templateUrl: '404.html'
  })
  .when('/review', {
    templateUrl: 'views/review.html',
    controller: 'ReviewCtrl'
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl'
  })
  .when('/social', {
    templateUrl: 'views/social.html',
    controller: 'SocialCtrl'
  })
  .when('/badges', {
    templateUrl: 'views/badges.html',
    controller: 'BadgesCtrl'
  })
  .when('/new_wines', {
    templateUrl: 'views/new_wines.html',
    controller: 'NewWinesCtrl'
  })
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/others', {
    templateUrl: 'views/others.html',
    controller: 'OthersCtrl'
  })
  .when('/reds', {
    templateUrl: 'views/reds.html',
    controller: 'RedsCtrl'
  })
  .when('/whites', {
    templateUrl: 'views/whites.html',
    controller: 'WhitesCtrl'
  })
  .otherwise({redirectTo: '/error'});
}
])

.constant('ServiceUrl', 'http://api.wineohapp.com/index.cfm/api')

.run(['$rootScope', '$log', 'WineOhService', function($rootScope, $log, WineOhService) {
  WineOhService.getWineData().then(
    function(result) {
      $rootScope.wineData = result;
      $log.info('We have wine data back from the server - see $rootScope.wineData');
    },
    function(error) {
      $log.error('We encountered an error getting the wine data from the server: ' + JSON.stringify(error));
    });
}]);
