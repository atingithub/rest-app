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
				
				self.loginModal = 'loginModal';
				self.userText = 'login';
				self.signInIcon = 'fa-sign-in';
				self.signOutIcon = 'fa-user';
				self.signInText = 'sign up';
								
				self.loginText = 'Login';
				self.descriptionText = 'Get access to your Orders';
				self.loginBtnText = 'login';
				self.newUserBtnText = 'new user ? sign up';
				
				self.existingUserBtnText = 'existing user ? login';
				self.signUpText = 'Signup';
				self.signUpDescription = 'We do not share your personal details with anyone.';
				self.signUpBtnText = 'continue';
				
				self.toggleText = true;
				self.toggleIcon = true;
				self.newUserClick = function newUserClick()
				{
					if (self.toggleText) {
						self.loginText = self.signUpText;
						self.loginBtnText = self.signUpBtnText;
						self.newUserBtnText = self.existingUserBtnText;
						self.descriptionText = self.signUpDescription;
						self.toggleText = false;
					}
					else {
						self.loginText = 'Login';
						self.loginBtnText = 'login';
						self.newUserBtnText = 'new user ? sign up';
						self.descriptionText = 'Get access to your Orders.';
						self.toggleText = true;
					}
				}
				
				self.clickedLoginBtn = function clickedLoginBtn()
				{
					console.log("clicked login");
					if (!self.toggleText) {
						/* signup view */
						console.log("sign up");
					}
					else {
						/* login view */
						
						self.userText = 'sign out';
						self.signInText = 'hi user !';
						self.toggleIcon = false;
						self.signOutIcon = 'fa-sign-out';
						self.loginModal = '';
					}
					$('#loginModal').modal('hide');
				}
				
				self.toggleSign = false;
				self.clickedSignUpBtn = function clickedSignUpBtn()
				{
					if (!self.toggleSign) {
						/* signup view */
						console.log("sign up");
					}
					else {
						/* login view */
						console.log("clicked login");
						self.userText = 'sign out';
						self.signInText = 'hi user !';
						self.toggleIcon = false;
						self.signOutIcon = 'fa-sign-out';
						self.loginModal = '';
					}
					$('#signUpModal').modal('hide');
				}
				
				self.existingUserClick = function existingUserClick()
				{
					if (self.toggleSign) {
						self.signUpText = 'Signup';
						self.signUpBtnText = 'continue';
						self.existingUserBtnText = 'existing user ? login';
						self.signUpDescription = 'We do not share your personal details with anyone.';
						self.toggleSign = false;
					}
					else {
						self.signUpText = 'Login';
						self.signUpBtnText = 'login';
						self.existingUserBtnText = 'new user ? sign up';
						self.signUpDescription = 'Get access to your Orders.';
						self.toggleSign = true;
					}
				}
			}
		]
  });