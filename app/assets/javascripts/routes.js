(function() {

    'use strict';

    angular
        .module('auto4n')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    // controller: 'HomeController as vm'
                })
                // static
                .state('home.about', {
                    url: 'about',
                    templateUrl: 'about/about.html'
                })
            $urlRouterProvider.otherwise('/')
        }]);

}());
