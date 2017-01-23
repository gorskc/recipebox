angular
  .module('ngRecipes')
  .controller('ShowNewCtrl', ShowNewCtrl);

ShowNewCtrl.$inject = ['$scope', 'sharedRecipeService'];

function ShowNewCtrl($scope, sharedRecipeService) {
  $scope.data = sharedRecipeService.getData();
  $scope.ingredients = $scope.data.ingredients.split(',');
  console.log($scope.data);
}
