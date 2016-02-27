'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AssetViewCtrl
 * @description
 * # AssetViewCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
 .controller('AssetViewCtrl', function (
   $scope,
   $routeParams,
   Asset
 ) {
   $scope.viewAsset = true;
   $scope.asset = Asset.one($routeParams.id).get().$object;
 });
