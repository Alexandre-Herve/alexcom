angular.module('alexcom.header', [
  'templates-app',
  'ui.router'
])

  .directive 'axHeader', () ->
    restrict: 'A'
    controller: 'HeaderCtrl'
    templateUrl: 'header/header.tpl.html'

  .controller 'HeaderCtrl', ($scope, $state) ->
    $scope.$state = $state
