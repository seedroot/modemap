(function() {
    'use strict'

    angular
        .module('modemap', ['ui.router'])
        .controller('mainCntrl', mainCntrl)
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
                    //templateUrl: 'partials/authentication/login.html',
                    template: '<h1>Hello Aziz</h1>',
                    controller: 'loginCntrl',
                    controllerAs: 'vm'
                })
        });

    mainCntrl.$inject = [];
    function mainCntrl() {
        var vm = this;
    }


})();