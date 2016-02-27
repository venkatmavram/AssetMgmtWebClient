'use strict';

describe('Controller: WorktasksCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var WorktasksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorktasksCtrl = $controller('WorktasksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorktasksCtrl.awesomeThings.length).toBe(3);
  });
});
