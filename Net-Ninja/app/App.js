let myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.message = "Hello, my name is Abdallah Hemdan";
    $scope.ninjas = [
      "Abdallah Hemdan",
      "Ahmed Mahboub",
      "Adel Mohamed",
      "Abdelrahman Elsaied",
    ];
  },
]);
