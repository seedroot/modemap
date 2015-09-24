(function() {
    'use strict'

    angular
        .module('modemap', ['ui.router']);
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'index.html',
                    controller: 'mainCntrl',
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