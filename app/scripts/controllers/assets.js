'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AssetsCtrl
 * @description
 * # AssetsCtrl
 * Controller of the clientApp
 */

  angular.module('clientApp')
    .controller('AssetsCtrl', function (
      $scope,
      Asset
    ) {
      $scope.assets = Asset.getList().$object;
    });
