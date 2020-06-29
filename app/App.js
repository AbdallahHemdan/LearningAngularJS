let myNinjaApp = angular.module("myNinjaApp", ["ngRoute", "ngAnimate"]);

myNinjaApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/home", {
        templateUrl: "views/Home.html",
        controller: "NinjaController",
      })
      .when("/ninjas", {
        templateUrl: "views/ListOfNinjas.html",
        controller: "NinjaController",
      })
      .when("/contact", {
        templateUrl: "views/ContactUs.html",
        controller: "ContactController",
      })
      .when("/contact-success", {
        templateUrl: "views/ContactSuccess.html",
      })
      .otherwise({
        redirectTo: "/home",
      });
  },
]);

myNinjaApp.directive("randomNinja", [
  function () {
    return {
      restrict: "E",
      transclude: true,
      replace: true,
      scope: {
        ninjas: "=",
        title: "=",
      },
      templateUrl: "views/RandomNinja.html",
      controller: function ($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      },
    };
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

    $scope.killAllNinjas = function () {
      $scope.ninjas = [];
    };
    $scope.message = "Hello, from Home";

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

myNinjaApp.controller("ContactController", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.sendMessage = function () {
      $location.path("/contact-success");
    };
  },
]);
