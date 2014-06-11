/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name thinkngApp
 * @description
 * # thinkngApp
 *
 * Main module of the application.
 */
var app = angular.module('thinkngApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/posts.html',
            controller: 'PostController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});