'use strict';
angular.module('app.services', [])
    .factory('Login', function ($http) {
        return {

            forgotPassword: function (forgotPasswordModel, success, error) {
                $http
                    .post(
                        'http://localhost:1367/forgotpassword', forgotPasswordModel)
                    .success(function (response) {
                        success(response);
                    })
                    .error(error);
            }
        };
    });
