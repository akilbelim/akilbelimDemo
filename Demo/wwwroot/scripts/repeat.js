/// <reference path="../js/angular.min.js" />

var MyApp = angular.module("myModule", [])
    .controller("myCtrl",
        function ($scope) {
            $scope.message = "Testing in angular js";
        }
    )
    .controller("repCtrl",
        function ($scope) {
            $scope.names = ['Test01', 'Test02', 'Test03'];
            $scope.test = "asd test";
        }
    )
    .controller("myService",
        function ($scope, $http) {
            $scope.message = "Test";
            $http.get("getHelp.html")
                .then(function (response) {
                    $scope.content = response.data;
                    $scope.statuscode = response.status;
                    $scope.statustext = response.statusText;
                });
        })
    .controller("myServiceErr",
        function ($scope, $http) {
            $scope.message = "Test";
            $http.get("getHelps.html")
                .then(function (response) {
                    $scope.content = response.data;
                    $scope.statuscode = response.status;
                    $scope.statustext = response.statusText;
                }, function (response) {
                    // Second function handles error
                    $scope.content = "Something went wrong";
                });
        })
    .controller("myServJson",
        function ($scope, $http) {
            $scope.message = "Test";
            //$scope.selectedId = [{ Id: 7, Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany' }];
            $scope.myFunc = function () {
                if ($scope.selectedId != null)
                    alert($scope.selectedId.Name);
            };
            $scope.showMe = false;
            $scope.hideShwFunc = function () {
                $scope.showMe = !$scope.showMe;
            };
            $http.get("customer.html")
                .then(function (response) {
                    $scope.responseData = response.data.records;
                    $scope.statuscode = response.status;
                    $scope.statustext = response.statusText;
                }, function (response) {
                    // Second function handles error
                    $scope.content = "Something went wrong";
                });
        });