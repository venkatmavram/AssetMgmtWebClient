'use strict';

describe('Controller: AssetViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AssetViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetViewCtrl = $controller('AssetViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetViewCtrl.awesomeThings.length).toBe(3);
  });
});
