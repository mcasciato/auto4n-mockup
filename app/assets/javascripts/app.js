(function() {
    'use strict';

    angular
        .module('auto4n', ['ui.router', 'templates', 'ngMessages'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        });
}());
