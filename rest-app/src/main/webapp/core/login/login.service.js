angular.
  module('core.login').
  factory('Login', ['$resource',
		function($resource) {
		
			return {
				Create : $resource('http://localhost:8081/rest-app/rest/api/user/create', {}, {
					save : {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' }
					}
				})
			}
		}
	]);