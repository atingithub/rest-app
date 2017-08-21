angular.
  module('restApp').
  component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: ['Product', '$location',
      function CategoryListController(Product, $location) {
				var self = this;
				self.categories = Product.Category.query();
      }
    ]
  });