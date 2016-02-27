'use strict';

describe('Controller: AssetDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AssetDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetDeleteCtrl = $controller('AssetDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetDeleteCtrl.awesomeThings.length).toBe(3);
  });
});
