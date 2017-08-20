angular.
  module('restApp').
  component('topView', {
    templateUrl: 'top-view/top-view.template.html',
    controller: ['Product', 'Cart', 'Data', '$location',
      function TopViewController(Product, Cart, Data, $location) {
				var self = this;
				
				self.cartCount = 0;
				
				self.showLogin = true;
				
				switch ($location.path()) {
					case '/category':
						self.showCart = false;
						break;
					case '/products':
						self.showCart = true;
						self.showCheckout = false;
						break;
					case '/cart':
						self.showClearCart = true;
						self.showCheckout = true;
						break;
					case '/checkout':
						self.showCheckout = false;
						self.showCart = true;
						self.showContinueShopping = true;
						break;
					case '/confirmation':
						self.continueShopping = true;
					default:
						break;
				}
				
				self.viewCart = function viewCart()
				{
					//console.log("Cart");
					$location.path('/cart');
				}
				
				self.clearCart = function clearCart()
				{
					console.log("clear cart");
					//$location.path('/cart');
				}
				
				self.continueShopping = function continueShopping()
				{
					console.log("continueShopping");
					//$location.path('/cart');
				}
				
				self.checkout = function checkout()
				{
					//console.log("checkout");
					$location.path('/checkout');
				}
				
				self.login = function login()
				{
					console.log("login");
					$location.path('/login');
				}
			}
		]
  });