angular.
  module('restApp').
  component('headerView', {
    templateUrl: 'header-view/header-view.template.html',
    controller: [ 'Product', 'Cart', 'Data', '$location',
      function HeaderViewController(Product, Cart, Data, $location) {
				self = this;
				
				self.viewCart = function viewCart()
				{
					$location.path('/cart');
				}
			}
		]
  });