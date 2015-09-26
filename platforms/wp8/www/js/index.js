(function() {
    'use strict'

    angular
        .module('modemap', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise = 'login';

            $stateProvider
                .state('forgot', {
                    url: '/forgotPassword',
                    templateUrl: 'partials/authentication/forgotPassword.html',
                    controller: 'forgotCntrl',
                    controllerAs: 'vm'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'partials/authentication/login.html',
                    controller: 'loginCntrl',
                    controllerAs: 'vm'
                })
        })


})();