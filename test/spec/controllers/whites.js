'use strict';

describe('Controller: WhitesCtrl', function () {

  // load the controller's module
  beforeEach(module('wineohApp'));

  var WhitesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhitesCtrl = $controller('WhitesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
