angular.module( 'alexcom.resume', [
  'ui.router',
  'templates-app'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'resume', {
    url: '/resume',
    views: {
      "main": {
        controller: 'ResumeCtrl',
        templateUrl: 'resume/resume.tpl.html'
      }
    },
    data:{ pageTitle: 'Resume' }
  });
})

.controller( 'ResumeCtrl', function ResumeCtrl( $scope ) {
})

;
