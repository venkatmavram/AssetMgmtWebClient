'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AssetDeleteCtrl
 * @description
 * # AssetDeleteCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('AssetDeleteCtrl', function (
   $scope,
   $routeParams,
   Asset,
   $location
 ) {
   $scope.asset = Asset.one($routeParams.id).get().$object;
   $scope.deleteAsset = function() {
     $scope.asset.remove().then(function() {
       $location.path('/assets');
     });
   };
   $scope.back = function() {
     $location.path('/asset/' + $routeParams.id);
   };
 });
