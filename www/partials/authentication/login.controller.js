(function() {
	'use strict'

	angular
		.module('modemap')
		.controller('loginCntrl', loginCntrl)

	loginCntrl.$inject = ['$scope'];
	function loginCntrl($scope) {
		var vm = this;
		$scope.name = 'aziz'
	}
})();