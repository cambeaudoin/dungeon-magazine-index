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

  // $scope.search = {};

  // $scope.filterFunction = function (elem) {
  //   console.log(elem);
  //   return ($scope.search.lvlLow ? elem.lvlLow === $scope.search.lvlLow : elem) &&
  //          ($scope.search.lvlHigh ? elem.lvlHigh === $scope.search.lvlHigh : elem) &&
  //          ($scope.search.title ? angular.lowercase(elem.title).indexOf(angular.lowercase($scope.search.title) || '') : elem)
  //   // return elem;
  // }

})

app.directive('sortArrow', [function () {
  return {
    restrict: 'A',
    template: '<i class="fa" ng-class="{\'fa-arrow-up\': reverse, \'fa-arrow-down\': !reverse}" aria-hidden="true"></i>',
    link: function (scope, elem) {
      // console.log(scope, elem);
    }
  }
}])

app.filter('contentFilter', function () {
  return function (items, toFilter) {
    if (items) {
      if (toFilter) {
        var keys = Object.keys(toFilter);
        var filtered = [];
        keys.forEach(function (key) {
          if (toFilter[key]) {
            filtered = items.filter(function (item) {
              return (toFilter[key] === item[key])
            })
          }
        })
        return filtered;
      }
      return items;
    }
  }
})