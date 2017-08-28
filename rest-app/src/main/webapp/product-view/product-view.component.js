angular.
  module('restApp').
  component('productView', {
    templateUrl: 'product-view/product-view.template.html',
    controller: ['Product', 'Data', '$routeParams', 
      function ProductViewController(Product, Data, $routeParams) {
				
				self = this;
								
				self.categoryName = $routeParams.name;
				self.categories = Data.data.categories;
				
				Product.Products.get({name : $routeParams.name}, function(products) {
					
					self.products = products;
					console.log(self.products);
				});
				
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