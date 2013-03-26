'use strict';

angular.module('griddyApp', ['ngSanitize'])
    .config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
        .otherwise({
        redirectTo: '/'
    });
});
