angular.
  module('restApp').
  component('headerView', {
    templateUrl: 'header-view/header-view.template.html',
    controller: [ 'Product', 'Data', '$location', '$rootScope',
      function HeaderViewController(Product, Data, $location, $rootScope) {
				self = this;
				
				Data.data = {};
				Data.data.carts = [];
				
				console.log(Data);
				
				$rootScope.cartCount = 0;
				
				self.viewCart = function viewCart()
				{
					$location.path('/cart');
				}
			}
		]
  });