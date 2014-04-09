'use strict';

describe('Directive: angularSnap', function () {

  // load the directive's module
  beforeEach(module('wineohApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<angular-snap></angular-snap>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the angularSnap directive');
  }));
});
