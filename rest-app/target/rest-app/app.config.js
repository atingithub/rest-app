'use strict';

angular.
  module('restApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/category', {
          template: '<category-list></category-list>'
        }).
        when('/products', {
          template: '<product-list></product-list>'
        }).
        otherwise('/category');
    }
  ]);