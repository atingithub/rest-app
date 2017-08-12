angular.
  module('core.product').
  factory('Product', ['$resource',
    function($resource) {
			
      return {
				Products : $resource('http://localhost:8081/rest-app/rest/api/1/products', {}, {
					query: {
						method: 'GET',
						params: {categoryId: '1'},
						isArray: true
					}
				}),
				
				Category : $resource('http://localhost:8081/rest-app/rest/api/categories', {}, {
					query: {
						method: 'GET',
						isArray: true
					}
				})
			}
			
    }
  ]);