angular.
  module('restApp').
  component('confirmationView', {
    templateUrl: 'confirmation-view/confirmation-view.template.html',
    controller: ['Customer', 'Data',
      function ConfirmationViewController(Customer, Data) {
				var self = this;
				
				self.customerDetails = Data.data.customers;
				self.orderDetails = Data.data.carts;
			}
		]
  });