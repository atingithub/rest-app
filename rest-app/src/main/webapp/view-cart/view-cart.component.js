angular.
  module('restApp').
  component('viewCart', {
    templateUrl: 'view-cart/view-cart.template.html',
    controller: ['Product', 'Cart',
      function ViewCartController(Product, Cart) {
				var self = this;
				
				self.cartItems = Cart.cart;
      }
    ]
  });