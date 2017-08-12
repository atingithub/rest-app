angular.
  module('restApp').
  component('products', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['Product',
      function ProductController(Product) {
				var self = this;
				
        self.products = Product.Products.query();
				console.log(products);
      }
    ]
  });