angular.module('alexcom.resume', [
  'ui.router',
  'templates-app'
])

  .config ($stateProvider) ->
    $stateProvider.state 'resume',
      url: '/resume'
      views:
        "main":
          controller: 'ResumeCtrl'
          templateUrl: 'resume/resume.tpl.html'
      data:
        pageTitle: 'Resume'
    

  .controller 'ResumeCtrl', ( $scope ) ->

