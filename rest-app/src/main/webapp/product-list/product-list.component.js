angular.
  module('restApp').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$routeParams', 'Product', 'Cart',
      function ProductController($routeParams, Product, Cart) {
				
				self = this;
				
				self.products = [
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "rolled in fresh herbs<br>2 patties (250g)",
        "id": 21,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "organic meat patties",
        "price": 2.29
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "matured, organic (70g)",
        "id": 22,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "parma ham",
        "price": 3.49
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "free range (250g)",
        "id": 23,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "chicken leg",
        "price": 2.59
    },
    {
        "categoryId": {
            "id": 2,
            "name": "meats"
        },
        "description": "reduced fat, pork<br>3 sausages (350g)",
        "id": 24,
        "lastUpdate": "2017-08-11T17:06:34",
        "name": "sausages",
        "price": 3.55
    }
];
				
				self.categories = [
										{
												"id": 1,
												"name": "dairy"
										},
										{
												"id": 2,
												"name": "meats"
										},
										{
												"id": 3,
												"name": "bakery"
										},
										{
												"id": 4,
												"name": "fruit & veg"
										}
				];
				
				/*
				Product.Category.query({}, function(categories) {
					self.categories = categories;
				});
				
				Product.Products.get({categoryName : 'dairy'}, function(products) {
					
					self.products = products;
				});
				*/
				
				Cart.cart = [];
					
				self.addToCart = function addToCart(product)
				{
					var cartItem = {};
					
					cartItem["id"] = product.id;
					cartItem["name"] = product.name;
					cartItem["description"] = product.description;
					cartItem["price"] = product.price;
					
					Cart.cart.push(cartItem);
				}
      }
    ]
  });