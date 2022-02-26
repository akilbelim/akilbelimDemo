var myapp = angular.module('myapp', []);
myapp.factory('countryService', function ($http, $q) {
    var factory = {}
    //get all countries
    factory.get = function () {
        var deferred = $q.defer();
        $http.get("/api/User")
            .success(deferred.resolve)
            .error(deferred.reject);
        return deferred.promise;
    }
    //insert Country
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
myapp.controller('countryController', ['$scope', 'countryService', function ($scope, countryService) {
    //get all countries
    $scope.get = function () {
        countryService.get().then(function (countries) {
            $scope.countries = countries
        })
    }
    //insert Country
    $scope.insert = function (country) {
        countryService.insert(country).then(function () {
            $scope.get();
        })
    }
    // delete Country by id
    $scope.delete = function (id) {
        countryService.delete(id).then(function () {
            $scope.get();
        })
    }
    // edit country by id
    $scope.edit = function (id) {
        countryService.edit(id).then(function (country) {
            $scope.ctry = country;
        })
    }
    //update Country 
    $scope.update = function (country) {
        countryService.update(country).then(function () {
            $scope.get();
        })
    }
    $scope.get();
}]);