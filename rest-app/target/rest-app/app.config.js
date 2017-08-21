'use strict';

angular.
  module('restApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/category', {
          template: '<top-view></top-view>' +
										'<header-view></header-view>' +
				            '<category-list></category-list>'
        }).
        when('/category/products/:name', {
          template: '<top-view></top-view>' +
										'<header-view></header-view>' +
										'<product-list></product-list>'
        }).
				when('/cart', {
          template: '<top-view></top-view>' +
										'<header-view></header-view>' +
										'<view-cart></view-cart>'
        }).
				when('/checkout', {
          template: '<top-view></top-view>' +
										'<header-view></header-view>' +
										'<checkout-item></checkout-item>'
        }).
				when('/confirmation', {
          template: '<top-view></top-view>' +
										'<header-view></header-view>' +
										'<confirmation-view></confirmation-view>'
        }).
        otherwise('/category');
    }
  ]);