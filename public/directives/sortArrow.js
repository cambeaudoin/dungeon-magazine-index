app.directive('sortArrow', [function () {
  return {
    restrict: 'A',
    template: '<i class="fa" ng-class="{\'fa-arrow-up\': reverse, \'fa-arrow-down\': !reverse}" aria-hidden="true"></i>'
  }
}]);