angular.
  module('core.customer').
  factory('Customer', ['$resource',
		function($resource) {
		
			return {
				AddCustomer : $resource('http://localhost:8081/rest-app/rest/api/customer/add', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
				})
			}
		}
	]);