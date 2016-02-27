'use strict';

describe('Controller: AssetEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AssetEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AssetEditCtrl = $controller('AssetEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AssetEditCtrl.awesomeThings.length).toBe(3);
  });
});
