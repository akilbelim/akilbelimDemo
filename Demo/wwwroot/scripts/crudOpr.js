var app = angular.module("myCrud", [])
    .controller("myCtrl", function ($scope) {
        $scope.id = 0;
        $scope.fName = '';
        $scope.lName = '';
        $scope.datas = [
            { id: 1, fName: 'Hege', lName: "Pege" },
            { id: 2, fName: 'Kim', lName: "Pim" },
            { id: 3, fName: 'Sal', lName: "Smith" },
            { id: 4, fName: 'Jack', lName: "Jones" },
            { id: 5, fName: 'John', lName: "Doe" },
            { id: 6, fName: 'Peter', lName: "Pan" }
        ];
        $scope.showMe = false;
        $scope.editData = function (id) {
            $scope.showMe = !$scope.showMe;
            $scope.id = id;
            $scope.fName = id == 0 ? '' : $scope.datas[id - 1].fName;
            $scope.lName = id == 0 ? '' : $scope.datas[id - 1].lName;
        };
        $scope.hideShwFunc = function () {
            $scope.showMe = !$scope.showMe;
        };
        $scope.saveData = function () {
            alert($scope.id);
        };
    });
//.controller('newCtrl', function ($scope, $http) {
//    $http({
//        method: "GET",
//        url: "api/User"
//    }).then(function mySuccess(response) {
//        $scope.myWelcome = response.data;
//    }, function myError(response) {
//        $scope.myWelcome = response.statusText;
//    });
//})
//.controller('newCtrl', function ($scope, $http) {
//    $http.get("api/User").then(function (response) {
//        $scope.myWelcome = response.data.records;
//    });
//});
app.factory('newCtrl', function ($http, $q) {
    var factory = {}
    //get all countries
    factory.get = function () {
        var deferred = $q.defer();
        $http.get("/api/User")
            .success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
        }
        ////insert Country
        //factory.insert = function (country) {
        //    var deferred = $q.defer();
        //    $http.post("/api/ManageCountries/", country)
        //        .success(deferred.resolve)
        //        .error(deferred.reject);
        //    return deferred.promise;
        //}
        ////delete Country by id
        //factory.delete = function (id) {
        //    var deferred = $q.defer();
        //    $http.delete("/api/ManageCountries/" + id)
        //        .success(deferred.resolve)
        //        .error(deferred.reject);
        //    return deferred.promise;
        //}
        ////edit country by id
        //factory.edit = function (id) {
        //    var deferred = $q.defer();
        //    $http.get("/api/ManageCountries/" + id)
        //        .success(deferred.resolve)
        //        .error(deferred.reject);
        //    return deferred.promise;
        //}
        ////update country
        //factory.update = function (country) {
        //    var deferred = $q.defer();
        //    $http.put("/api/ManageCountries/", country)
        //        .success(function (deferred.resolve)
        //        .error(function (deferred.reject);
        //    return deferred.promise;
        //}
        return factory;
    });