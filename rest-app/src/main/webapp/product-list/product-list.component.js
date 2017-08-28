angular.
  module('restApp').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['Product', 'Data', 'Cart', 'RootService', '$routeParams', '$rootScope',
      function ProductController(Product, Data, Cart, RootService, $routeParams, $rootScope) {
				
				self = this;
								
				self.categoryName = $routeParams.name;
				self.categories = Data.data.categories;
				
				Product.Products.get({name : $routeParams.name}, function(products) {
					self.products = products;
				});
				
				self.categoryClicked = function categoryClicked(category)
				{
					console.log("category clicked : " + category);
					Product.Products.get({name : category}, function(products) {
						self.categoryName = category;
						self.products = products;
					});
				}
				
				var quantity = 1;
				
				self.cartIndex = 0;
				self.count = 0;
				self.addToCart = function addToCart(product)
				{
					if (self.isItemAdded(Data.data.carts, product.id)) {
						self.updateQuantity();
					}
					else {
						self.addCartItems(product);
						self.count++;
					}
					$rootScope.cartCount = self.count;
					
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
					
					cartItem.quantity = quantity;
					cartItem.product = {
						'id' : product.id,
						'name' : product.name,
						'description' : product.description,
						'price' : product.price,
					};
					
					console.log(cartItem);
					/*
					['id'] = product.id;
					cartItem['name'] = product.name;
					cartItem['description'] = product.description;
					cartItem['price'] = product.price;
					cartItem['quantity'] = quantity; */
					
					Data.data.carts.push(cartItem);
				}
				
      }
    ]
  });