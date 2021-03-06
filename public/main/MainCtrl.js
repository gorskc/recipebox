angular
  .module('recipebox')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$log'];
function MainCtrl($scope, $log) {

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.appenToEl = angular.element(document.querySelector('#dropdown-long-content'));
}
