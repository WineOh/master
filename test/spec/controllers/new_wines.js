'use strict';

describe('Controller: NewWinesCtrl', function () {

  // load the controller's module
  beforeEach(module('wineohApp'));

  var NewWinesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewWinesCtrl = $controller('NewWinesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
