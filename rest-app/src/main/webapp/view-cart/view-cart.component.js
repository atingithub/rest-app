angular.
  module('restApp').
  component('viewCart', {
    templateUrl: 'view-cart/view-cart.template.html',
    controller: ['Product', 'Data',
      function ViewCartController(Product, Data) {
				var self = this;
				
				self.carts = Data.data.carts;
				console.log(Data.data.carts);
				
				self.cartQuantity = 0;
				self.updateCart = function updateCart(cart) {
					cart.quantity = self.cartQuantity;
				}
				
      }
    ]
  });