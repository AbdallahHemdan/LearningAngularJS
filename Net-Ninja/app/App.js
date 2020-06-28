let myNinjaApp = angular.module("myNinjaApp", ["ngRoute"]);

myNinjaApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/Home.html",
        controller: "NinjaController",
      })
      .when("/ninjas", {
        templateUrl: "views/ListOfNinjas.html",
        controller: "NinjaController",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myNinjaApp.controller("NinjaController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.removeNinja = function (ninja) {
      $scope.ninjas.splice($scope.ninjas.indexOf(ninja), 1);
    };

    $scope.addNewNinja = function () {
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        rate: $scope.newNinja.rate,
        belt: $scope.newNinja.belt,
        available: true,
      });
      $scope.newNinja = [];
    };
    $scope.message = "Hello, my name is Abdallah Hemdan";

    $http.get("data/ninjas.json").then(
      function ({ data }) {
        $scope.ninjas = data;
      },
      function (error) {
        console.log(error);
      }
    );
  },
]);
