'use strict';

describe('Service: WineService', function () {

  // load the service's module
  beforeEach(module('wineohApp'));

  // instantiate service
  var WineService;
  beforeEach(inject(function (_WineService_) {
    WineService = _WineService_;
  }));

  it('should do something', function () {
    expect(!!WineService).toBe(true);
  });

});
