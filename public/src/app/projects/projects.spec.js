describe( 'projects', function(){

  var $state, $scope, $rootScope, $controller;
  beforeEach( module( 'alexcom.projects' ));

  /**
   * describing the route config
   */

  describe( 'Projects Routing', function(){

    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
    }));

    it( 'Should have the projects template when the state is set to projects', function(){
      $state.go('projects');
      $rootScope.$digest();
      expect( $state.current.views.main.templateUrl ).toBe('projects/projects.tpl.html');
    });

    it( 'Should have the projects controller when the state is set to projects', function(){
      $state.go('projects');
      $rootScope.$digest();
      expect( $state.current.views.main.controller ).toBe('ProjectsCtrl');
    });

    it( 'Should have a projects pagetitle', function(){
      $state.go('projects');
      $rootScope.$digest();
      expect( $state.current.data.pageTitle ).toBe('Projects');
    });
  });

  /**
   * describing the controller 
   */
  describe( 'Projects Controller', function(){
    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
      $scope = $rootScope.$new();
      $controller = $injector.get( '$controller' );
      createController = function(){
        return $controller( 'ProjectsCtrl', {
          '$scope': $scope
        });
      };
    }));

    it( 'should have a Projects Controller defined', function(){
      var controller = createController();
      expect( controller ).toBeDefined();
    });
  });
});


