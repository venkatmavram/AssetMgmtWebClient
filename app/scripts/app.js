'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
 angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
])
  .config(function (
    $routeProvider,RestangularProvider
  ) {

    RestangularProvider.setBaseUrl('http://localhost:3000');


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl',
      })
      .when('/assets', {
        templateUrl: 'views/assets.html',
        controller: 'AssetsCtrl',
      })
      .when('/create/asset', {
        templateUrl: 'views/asset-add.html',
        controller: 'AssetAddCtrl',
        controllerAs: 'assetAdd'
      })
      .when('/asset/:id', {
        templateUrl: 'views/asset-view.html',
        controller: 'AssetViewCtrl',
        controllerAs: 'assetView'
      })
      .when('/asset/:id/delete', {
        templateUrl: 'views/asset-delete.html',
        controller: 'AssetDeleteCtrl',
        controllerAs: 'assetDelete'
      })
      .when('/asset/:id/edit', {
        templateUrl: 'views/asset-edit.html',
        controller: 'AssetEditCtrl',
        controllerAs: 'assetEdit'
      })
      
      .otherwise({
        redirectTo: '/'
      });

  })
  .factory('AssetRestangular', function(Restangular) {
     return Restangular.withConfig(function(RestangularConfigurer) {
       RestangularConfigurer.setRestangularFields({
         id: '_id'
       });
     });
   })
   .factory('Asset', function(AssetRestangular) {
     return AssetRestangular.service('asset');
   });

  