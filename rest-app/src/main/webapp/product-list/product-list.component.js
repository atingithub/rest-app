angular.
  module('restApp').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$routeParams', 'Product', 'Data',
      function ProductController(Product, Cart, Data, $routeParams) {
				
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
										},
										{
												"id": 5,
												"name": "dry fruits"
										},
										{
												"id": 6,
												"name": "fresh fish"
										}
				];
				self.categoryName = 'dairy';
				/*
				Product.Category.query({}, function(categories) {
					self.categories = categories;
				});
				
				Product.Products.get({categoryName : 'dairy'}, function(products) {
					
					self.products = products;
				});
				*/
				
				var quantity = 1;
				Data.data = {};
				Data.data.carts = [];
				self.cartIndex = 0;
				
				self.addToCart = function addToCart(product)
				{
					console.log(product.id);
					if (self.isItemAdded(Data.data.carts, product.id)) {
						self.updateQuantity();
					}
					else {
						self.addCartItems(product);
					}
					
				}
				
				self.isItemAdded = function isItemAdded(cartList, productId) {
					for(var i = 0; i < cartList.length; i++) {
						if(cartList[i].id == productId) {
							self.cartIndex = i;
							return true;
						}
					}
				}
				
				self.updateQuantity = function updateQuantity() {
					Data.data.carts[self.cartIndex].quantity
						= Data.data.carts[self.cartIndex].quantity + 1;
				}
				
				self.addCartItems = function addCartItems(product) {
					var cartItem = {};
					
					cartItem['id'] = product.id;
					cartItem['name'] = product.name;
					cartItem['description'] = product.description;
					cartItem['price'] = product.price;
					cartItem['quantity'] = quantity;
					
					Data.data.carts.push(cartItem);
				}
				
      }
    ]
  });