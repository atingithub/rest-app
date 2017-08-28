angular.
  module('restApp').
  component('checkoutItem', {
    templateUrl: 'checkout-item/checkout-item.template.html',
    controller: ['Data', 'Customer', '$location', 'Cart',
      function CheckoutItemController(Data, Customer, $location, Cart) {
				var self = this;
				
				self.carts = Data.data.carts;
				
				self.customer = {};
				
				self.amount = 0.0;
				
				for (i = 0; i < Data.data.carts.length; i++) { 
    			self.amount =
						self.amount  + (self.carts[i].product.price * self.carts[i].quantity);
				}
				
				self.submitPurchase = function submitPurchase()
				{
					Data.data.customers = self.customer;
					
					Customer.AddCustomer.save({}, self.customer).$promise.then(function(customer) {
						
						var orders = {};
						orders.customerId = customer.id;
						orders.amount = self.amount;
						Cart.AddOrder.save({}, orders).$promise.then(function(orders) {
							orders.id = orders.id;
							orders.orderedProductCollection = self.carts;
							Cart.OrderedProduct.save({}, orders).$promise.then(function(orderedProducts) {
								
								Data.data.carts.orderedProducts = orderedProducts;
								
								$location.path('/confirmation');
							});
							
						});
						
					});
					
				}
			}
			
		]
  });