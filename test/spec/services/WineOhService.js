'use strict';

describe('Service: WineOhService', function () {

  // load the service's module
  beforeEach(module('wineohApp'));

  // instantiate service
  var WineOhService;
  beforeEach(inject(function (_Wineohservice_) {
    WineOhService = _Wineohservice_;
  }));

  it('should do something', function () {
    expect(!!WineOhService).toBe(true);
  });

});
