angular.
  module('core.cart').
  factory('Cart', ['$resource',
		function($resource) {
		
			return {
				Create : $resource('http://localhost:8081/rest-app/rest/api/order/product/create', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
				})
			}
		}
	]);