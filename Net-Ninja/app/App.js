let myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
  "$scope",
  ($scope) => {
    $scope.removeNinja = (ninja) => {
      $scope.ninjas.splice($scope.ninjas.indexOf(ninja), 1);
    };
    $scope.message = "Hello, my name is Abdallah Hemdan";
    $scope.ninjas = [
      {
        name: "Mahboub",
        belt: "green",
        rate: 50,
        available: true,
      },
      {
        name: "Abdelrahman",
        belt: "orange",
        rate: 70,
        available: true,
      },
      {
        name: "Dola",
        belt: "blue",
        rate: 45,
        available: true,
      },
      {
        name: "Hemdan",
        belt: "cornflowerblue",
        rate: 90,
        available: true,
      },
    ];
  },
]);
