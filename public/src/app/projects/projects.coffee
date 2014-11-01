angular.module('alexcom.projects', [
  'ui.router',
  'templates-app'
])

  .config ($stateProvider) ->
    $stateProvider.state 'projects',
      url: '/projects'
      views:
        "main":
          controller: 'ProjectsCtrl'
          templateUrl: 'projects/projects.tpl.html'
      data:
        pageTitle: 'Projects'
    

  .controller 'ProjectsCtrl', ( $scope ) ->

