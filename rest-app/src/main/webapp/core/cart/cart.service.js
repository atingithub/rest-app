angular.
  module('core.cart').
  factory('Cart', ['$resource',
		function($resource) {
		
			return {
				AddOrder : $resource('http://localhost:8081/rest-app/rest/api/order/add', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
				}),
				
				OrderedProduct : $resource('http://localhost:8081/rest-app/rest/api/order/product/add', {}, {
			  	save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
			  }),
				
				PlaceOrder : $resource('http://localhost:8081/rest-app/rest/api/orders', {}, {
			  	save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
			  })
			}
		}
	]);