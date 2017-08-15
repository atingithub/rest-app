angular.
  module('restApp').
  component('checkoutItem', {
    templateUrl: 'checkout-item/checkout-item.template.html',
    controller: ['Cart', 'Customer', 
      function CheckoutItemController(Cart, Customer) {
				var self = this;
				
				self.cartItems = Cart.cart;
				self.customer = {};
				
				self.subtotal = 0.0;
				self.surcharge = 3.0;
				
				//for (i = 0; i < Cart.cart.length; i++) { 
    		//	self.subtotal = self.subtotal  + Cart.cart[i].price;
				//}
				
				self.total = self.subtotal + self.surcharge;
				
				self.submitPurchase = function submitPurchase()
				{
					Customer.Details = self.customer;
					Customer.Create.save({}, self.customer);
				}
			}
		]
  });