angular.
  module('core.data').
  factory('Data', function() {
		var data = {};
		var data = {
			categories : {},
			carts : {},
			customers : {}
		};
	
		data.updateCartCount = function updateCartCount()
		{
			return data.carts.length;
		}
		return data;
	});