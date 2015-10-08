(function() {
	'use strict'

	angular
		.module('modemap')
		.controller('loginCntrl', loginCntrl)

	loginCntrl.$inject = ['loginService'];
	function loginCntrl(loginService) {
		var vm = this;

		var data = loginService.login();
		console.log(data);
	}
})();