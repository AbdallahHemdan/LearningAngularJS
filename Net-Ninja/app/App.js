let myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.message = "Hello, my name is Abdallah Hemdan";
    $scope.ninjas = [
      {
        name: "Mahboub",
        belt: "green",
        rate: 50,
      },
      {
        name: "Abdelrahman",
        belt: "orange",
        rate: 70,
      },
      {
        name: "Dola",
        belt: "blue",
        rate: 45,
      },
      {
        name: "Hemdan",
        belt: "black",
        rate: 90,
      },
    ];
  },
]);
