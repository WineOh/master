'use strict';

angular.module('wineohApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider)
{
  $routeProvider
  .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
  .when('/detail', {templateUrl: 'views/detail.html', controller: 'DetailCtrl'})
  .when('/error', {templateUrl: '404.html'})
  .when('/review', {
    templateUrl: 'views/review.html',
    controller: 'ReviewCtrl'
  })
  .otherwise({redirectTo: '/error'});
}
]);
