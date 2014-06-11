'use strict';

/**
 * @ngdoc function
 * @name angularpostsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularpostsApp
 */
angular.module('angularpostsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
