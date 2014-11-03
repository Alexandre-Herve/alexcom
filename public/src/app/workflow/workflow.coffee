angular.module('alexcom.workflow', [
  'ui.router',
  'templates-app'
])

  .config(($stateProvider) ->
    $stateProvider.state( 'workflow',
      url: '/workflow'
      views:
        main:
          controller: 'WorkflowCtrl'
          templateUrl: 'workflow/workflow.tpl.html'
      data:
        pageTitle: 'Workflow'
    )
  )

  .controller('WorkflowCtrl', ( $scope ) -> )
