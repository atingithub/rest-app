angular.
  module('restApp').
  component('headerView', {
    templateUrl: 'header-view/header-view.template.html',
    controller: ['Header',
      function HeaderViewController() {}
		]
  });