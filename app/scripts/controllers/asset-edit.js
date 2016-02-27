'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AssetEditCtrl
 * @description
 * # AssetEditCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('AssetEditCtrl', function (
   $scope,
   $routeParams,
   Asset,
   $location
 ) {
   $scope.editAsset = true;
   $scope.asset = {};
   Asset.one($routeParams.id).get().then(function(asset) {
     $scope.asset = asset;
     $scope.saveAsset = function() {
       console.log ('In asset-edit');
       $scope.asset.save().then(function() {
         $location.path('/asset/' + $routeParams.id);
       });
     };
   });
 });
