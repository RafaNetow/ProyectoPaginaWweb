'use strict';
angular.module('app.controllers', [])
$scope.forgotPassword = function () {
    Login.forgotPassword($scope.user, function (response) {

    }, function (error) {

    });
};