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
				
				Products : $resource('http://localhost:8081/rest-app/rest/api/products?name=:categoryName', {}, {
					get: {
						method: 'GET',
						params: {categoryName: 'dairy'},
						isArray: true
					}
				})
			}
			
    }
  ]);