angular.module('alexcom.header', [
  'templates-app',
  'ui.router'
])

  .directive 'axHeader', () ->
    restrict: 'A'
    controller: 'HeaderCtrl'
    controllerAs: 'header'
    templateUrl: 'header/header.tpl.html'

  .controller 'HeaderCtrl',
    class HeaderCtrl
      @$inject: ['$state']
      constructor: (@$state) ->
