angular.
  module('core.root').
  factory('RootService', ['$rootScope',
		function($rootScope) {
		
			return {
				setCartItems: function(value) {
					$rootScope.cartCount = value;
				},
				getCartItems: function() {
					return $rootScope.cartCount;
				}
			}
		}
	]);