'use strict';

describe('Controller: RecurringexpensesCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var RecurringexpensesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecurringexpensesCtrl = $controller('RecurringexpensesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecurringexpensesCtrl.awesomeThings.length).toBe(3);
  });
});
