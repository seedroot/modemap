(function() {
	'use strict'

	angular
		.module('modemap')
		.service('loginService', loginService);

	loginService.$inject = ['$http', '$q', 'config'];
	function loginService($http, $q, config) {

		this.login = function() {
			var deferred = $q.defer();

			$http.get(config.apiUrl)
				.success(function(res) {
					console.log(res);
					deferred.resolve(res);
				})

			return deferred.promise;	
		}
	}
})();