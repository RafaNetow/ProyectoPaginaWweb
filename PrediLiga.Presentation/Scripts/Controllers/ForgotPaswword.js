'user strict';
angular.module('app.controllers')
    .controller('ForgotPaswwordfgCtrl', [
        '$scope', '$location', '$window', 'AccountService', function ($scope, $location, $window, AccountService) {
            $scope.$root.title = 'SportLiga  | Password Recovery';
            $scope.user = {};
            $scope.submitRequest = function () {
                AccountService.resetpasword($scope.user, function (response) {
                    console.log(response);
                    $scope.requestSent = true;
                    console.log("Email sent");
                }, function (error) {
                    console.log(error);
                    $scope.requestFailed = true;
                });

            };

        }]);