angular.
  module('core.product').
  factory('Product', ['$resource',
    function($resource) {
			
      return {
				
				Category : $resource('http://localhost:8081/rest-app/rest/api/categories', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				}),
				
				Products : $resource('http://localhost:8081/rest-app/rest/api/category/products?name=:name', {}, {
					get: {
						method: 'GET',
						isArray: true
					}
				})
			}
			
    }
  ]);