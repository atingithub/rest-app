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
				when('/cart', {
          template: '<view-cart></view-cart>'
        }).
				when('/checkout', {
          template: '<checkout-item></checkout-item>'
        }).
				when('/confirmation', {
          template: '<confirmation-view></confirmation-view>'
        }).
        otherwise('/category');
    }
  ]);