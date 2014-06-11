'use strict';

/**
 * @ngdoc function
 * @name thinkngApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thinkngApp
 */
angular.module('thinkngApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
