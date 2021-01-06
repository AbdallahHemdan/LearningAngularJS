let myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', ($scope) => {
  $scope.ninjas = [
    {
      name: 'Abdallah',
      price: 15,
    },
    {
      name: 'Ahmed',
      price: 65,
    },
    {
      name: 'Hemdan',
      price: 75,
    },
    {
      name: 'Omar',
      price: 25,
    },
    {
      name: 'Mohamed',
      price: 45,
    },
  ];
}]);