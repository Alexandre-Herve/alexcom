describe( 'workflow', function(){

  var $state, $scope, $rootScope, $controller;
  beforeEach( module( 'alexcom.workflow' ));

  /**
   * describing the route config
   */

  describe( 'Workflow Routing', function(){

    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
    }));

    it( 'Should have the workflow template when the state is set to workflow', function(){
      $state.go('workflow');
      $rootScope.$digest();
      expect( $state.current.views.main.templateUrl ).toBe('workflow/workflow.tpl.html');
    });

    it( 'Should have the workflow controller when the state is set to workflow', function(){
      $state.go('workflow');
      $rootScope.$digest();
      expect( $state.current.views.main.controller ).toBe('WorkflowCtrl');
    });

    it( 'Should have a workflow pagetitle', function(){
      $state.go('workflow');
      $rootScope.$digest();
      expect( $state.current.data.pageTitle ).toBe('Workflow');
    });
  });

  /**
   * describing the controller 
   */
  describe( 'Workflow Controller', function(){
    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
      $scope = $rootScope.$new();
      $controller = $injector.get( '$controller' );
      createController = function(){
        return $controller( 'WorkflowCtrl', {
          '$scope': $scope
        });
      };
    }));

    it( 'should have a Workflow Controller defined', function(){
      var controller = createController();
      expect( controller ).toBeDefined();
    });
  });
});



