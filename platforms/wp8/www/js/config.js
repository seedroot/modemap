(function() {
	'use strict'

	var config = {
		apiUrl: 'http://localhost:3000'
	}

	angular
		.module('modemap')
		.constant('config', config)
		.config(httpInterceptorConfig);

	httpInterceptorConfig.$inject = ['$httpProvider', '$provide'];
	function httpInterceptorConfig($httpProvider, $provide) {
		interceptor.$inject = ['$q', '$rootScope'];
		function interceptor ($q, $rootScope) {
			return {
				'request': function (config) {
					console.log(config);
					config.headers.aziz = 'aziz tinwala';
					return config || $q.when(config);
				},
				'response': function (response) {
					console.log(response);
					return response || $q.when(response);
				},
				'requestError': function (rejection) {
					console.log(rejection);
					return $q.reject(rejection);
				},
				'responseError': function (rejection) {
					console.log(rejection);
					return $q.reject(rejection);
				}
			};
		}
		$provide.factory('httpInterceptor', interceptor);
		$httpProvider.interceptors.push('httpInterceptor');
	}

})();