angular.
  module('restApp').
  component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: ['Product', 'Data', '$location',
      function CategoryListController(Product, Data, $location) {
				var self = this;
				
				self.categories = Product.Category.query();
				
				this.categories.$promise.then(function(data) {
					Data.data.categories = data;
				});
      }
    ]
  });