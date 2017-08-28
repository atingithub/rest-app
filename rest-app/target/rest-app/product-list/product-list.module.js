var app = angular.module('productList', [
	'ngRoute',
	'core.product'
]);

app.directive('productsTable', function() {
		return {
			template :
				 '<table class="table table-bordered">' +
						'<tbody>' +
							'<tr ng-repeat="product in $ctrl.products">' +
								'<td align="center">' +
									'<img ng-src="img/products/{{product.name}}.png" class="img-responsive" alt="{{product.name}}">' +
								'</td>' +
								'<td class="td-product">{{product.description}}</td>' +
								'<td align="center">&#36;{{product.price}}</td>' +
								'<td align="center">' +
									'<button type="button" class="btn btn-default btn-link" ng-click=$ctrl.addToCart(product)>add to cart</button>' +
								'</td>' +
							'</tr>' +
						'</tbody>' +
					'</table>'
		};
	});