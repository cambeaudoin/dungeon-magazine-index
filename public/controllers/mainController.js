app.controller('MainController', function ($scope, $http) {
  $http.get('src/content.json')
    .then(function (res) {
      $scope.content = [];
      for (i in res.data) {
        $scope.content.push(res.data[i]);
      }
    });

  $scope.sortBy = function (columnName) {
    $scope.reverse = ($scope.columnName === columnName) ? !$scope.reverse : false;
    $scope.columnName = columnName;
  }

  $scope.clearFilters = function () {
    var fields = document.querySelectorAll('input');
    fields.forEach(function(input) {
      angular.element(input).$setPristine;
      // console.log(input);
      // input.value = null;
      // $scope.content.reload();
    })
  }
})