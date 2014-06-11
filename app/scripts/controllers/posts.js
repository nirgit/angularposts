'use strict'

app.controller('PostController', function($scope) {
    $scope.posts = [];

    $scope.post = {
        url: 'http://',
        title: ''
    };

    $scope.addPost = function() {
        $scope.posts.push($scope.post);
        $scope.post = {
            url: 'http://',
            title: ''
        };
    };

    $scope.deletePost = function(index) {
        if (index >= 0 && index < $scope.posts.length) {
            $scope.posts.splice(index, 1);
        }
    };
});