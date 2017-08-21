angular.
  module('restApp').
  component('viewCart', {
    templateUrl: 'view-cart/view-cart.template.html',
    controller: ['Product', 'Data', '$location',
      function ViewCartController(Product, Data, $location) {
				var self = this;
				
				self.carts = Data.data.carts;
				console.log(Data.data.carts);
				
				self.cartQuantity = 0;
				self.updateCart = function updateCart(cart) {
					cart.quantity = self.cartQuantity;
				}
				
				self.proceedCheckout = function proceedCheckout() {
					console.log('checkout');
					$location.path('/checkout');
				}
				
      }
    ]
  });