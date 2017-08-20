angular.
  module('core.customer').
  factory('Customer', ['$resource',
		function($resource) {
		
			return {
				Create : $resource('http://localhost:8081/rest-app/rest/api/customer/create', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
				})
			}
		}
	]);