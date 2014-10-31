angular.module('alexcom.header', [
  'templates-app',
  'ui.router'
])

.directive('axHeader', [function(){
  return {
    restrict: 'A',
    controller: 'HeaderCtrl',
    templateUrl: 'header/header.tpl.html'
  };
}])

.controller('HeaderCtrl', ['$scope', '$state', '$timeout', function( $scope, $state, $timeout ){
  $scope.$state = $state;
  $scope.lol = "haha";
  $timeout( function(){
    $scope.lol = "hoho";
  }, 2000);

}]);
