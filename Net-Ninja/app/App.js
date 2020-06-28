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
  function ($scope) {
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
    $scope.ninjas = [
      {
        name: "Mahboub",
        belt: "green",
        rate: 50,
        available: true,
        thumb: "./content/images/mahboub.png",
      },
      {
        name: "Abdelrahman",
        belt: "orange",
        rate: 70,
        available: true,
        thumb: "./content/images/abdo.png",
      },
      {
        name: "Dola",
        belt: "blue",
        rate: 45,
        available: true,
        thumb: "./content/images/adel.png",
      },
      {
        name: "Hemdan",
        belt: "cornflowerblue",
        rate: 90,
        available: true,
        thumb: "./content/images/hemdan.png",
      },
    ];
  },
]);
