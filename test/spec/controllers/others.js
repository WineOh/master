'use strict';

describe('Controller: OthersCtrl', function () {

  // load the controller's module
  beforeEach(module('wineohApp'));

  var OthersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OthersCtrl = $controller('OthersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
