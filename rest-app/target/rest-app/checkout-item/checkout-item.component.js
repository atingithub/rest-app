angular.
  module('restApp').
  component('checkoutItem', {
    templateUrl: 'checkout-item/checkout-item.template.html',
    controller: ['Data', 'Customer', '$location',
      function CheckoutItemController(Data, Customer, $location) {
				var self = this;
				
				self.carts = Data.data.carts;
				
				self.customer = {};
				
				self.subtotal = 0.0;
				self.surcharge = 3.0;
				
				for (i = 0; i < Data.data.carts.length; i++) { 
    			self.subtotal = self.subtotal  + (self.carts[i].price * self.carts[i].quantity);
				}
				
				self.total = self.subtotal + self.surcharge;
				
				self.submitPurchase = function submitPurchase()
				{
					Data.data.customers = self.customer;
					//Customer.Create.save({}, self.customer);
					$location.path('/confirmation');
				}
			}
		]
  });