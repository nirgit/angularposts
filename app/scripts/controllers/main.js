'use strict';

/**
 * @ngdoc function
 * @name thinkngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thinkngApp
 */
angular.module('thinkngApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
