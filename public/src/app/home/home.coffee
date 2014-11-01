angular.module('alexcom.home', [
  'ui.router',
  'templates-app'
])

  .config ($stateProvider) ->
    $stateProvider.state 'home',
      url: '/home'
      views:
        "main":
          controller: 'HomeCtrl'
          templateUrl: 'home/home.tpl.html'
      data:
        pageTitle: 'Home'
    

  .controller 'HomeCtrl', ( $scope ) ->
