angular.
  module('restApp').
  component('topView', {
    templateUrl: 'top-view/top-view.template.html',
    controller: ['Top',
      function TopViewController() {}
		]
  });