'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:AssetAddCtrl
 * @description
 * # AssetAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('AssetAddCtrl', function (
  $scope,
  Asset,
  $location
) {
  $scope.asset = {};
  $scope.saveAsset = function() {
    console.log ('in Add Asset');
    Asset.post($scope.asset).then(function() {
      $location.path('/assets');
    });
  };
});
