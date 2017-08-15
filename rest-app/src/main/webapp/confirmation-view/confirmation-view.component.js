angular.
  module('restApp').
  component('confirmationView', {
    templateUrl: 'confirmation-view/confirmation-view.template.html',
    controller: ['Customer', 'Cart',
      function ConfirmationViewController(Customer, Cart) {
				var self = this;
				
				self.customerDetails = Customer.Details;
				self.orderDetails = Cart.cart;
			}
		]
  });