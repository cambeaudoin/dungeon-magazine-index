var app = angular.module('characterBuilder', ['ngAria']);

app.controller('MainController', function ($scope, $http) {
  $http.get('assets/content.json')
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

app.directive('sortArrow', [function () {
  return {
    restrict: 'A',
    template: '<i class="fa" ng-class="{\'fa-arrow-up\': reverse, \'fa-arrow-down\': !reverse}" aria-hidden="true"></i>'
  }
}])

app.filter('contentFilter', function () {
  return function (items, toFilter) {
    if (items) {
      if (toFilter) {
        var keys = Object.keys(toFilter);
        var filtered = [];
        keys.forEach(function (key) {
          // if (toFilter[key]) {
            filtered = items.filter(function (item) {
              if (typeof toFilter[key] === 'string') {
                return (toFilter[key] ? item[key].toLowerCase().includes(toFilter[key].toLowerCase()) : item);
              }
              return (toFilter[key] ? toFilter[key] === item[key] : item);
            })
          // } else {
          //   filtered = items;
          // }
          // if (filtered.length === 0) {
          // }
        })
        return filtered;
      }
      return items;
    }
  }
})