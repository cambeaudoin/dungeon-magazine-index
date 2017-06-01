var app = angular.module('characterBuilder', []);

app.controller('MainController', function ($scope, $http) {
  $http.get('assets/content.json')
    .then(function (res) {
      $scope.content = [];
      for (i in res.data) {
        $scope.content.push(res.data[i]);
      }
    });
})