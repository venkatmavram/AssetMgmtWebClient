'use strict';

describe('Controller: WorkordersCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var WorkordersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkordersCtrl = $controller('WorkordersCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkordersCtrl.awesomeThings.length).toBe(3);
  });
});
