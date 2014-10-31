angular.module( 'alexcom.workflow', [
  'ui.router',
  'templates-app'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'workflow', {
    url: '/workflow',
    views: {
      "main": {
        controller: 'WorkflowCtrl',
        templateUrl: 'workflow/workflow.tpl.html'
      }
    },
    data:{ pageTitle: 'Workflow' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'WorkflowCtrl', ['$scope', '$state', function WorkflowController( $scope, $state ) {
}]);


