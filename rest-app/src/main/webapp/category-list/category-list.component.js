angular.
  module('restApp').
  component('categoryList', {
    templateUrl: 'category-list/category-list.template.html',
    controller: ['Product', '$location',
      function CategoryListController(Product, $location) {
				var self = this;
				
        self.categoryList = Product.Category.query();
				
				self.onCategoryClick = function onCategoryClick(category)
				{
					switch(category) {
						case 'bakery':
								break;
						case 'meats':
								break;
						case 'fruit&veg':
							break;
						case 'dairy':
							break;
						default:
							break;
          }
					
					//$location.path('/products');
				}
      }
    ]
  });