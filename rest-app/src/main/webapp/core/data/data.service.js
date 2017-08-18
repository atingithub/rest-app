angular.
  module('core.data').
  factory('Data', function() {
		var data = {};
		var data = {
			carts : {},
			customers : {}
		};
		return data;
	});