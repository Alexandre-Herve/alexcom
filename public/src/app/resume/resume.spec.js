describe( 'resume', function(){

  var $state, $scope, $rootScope, $controller;
  beforeEach( module( 'alexcom.resume' ));

  /**
   * describing the route config
   */

  describe( 'Resume Routing', function(){

    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
    }));

    it( 'Should have the resume template when the state is set to resume', function(){
      $state.go('resume');
      $rootScope.$digest();
      expect( $state.current.views.main.templateUrl ).toBe('resume/resume.tpl.html');
    });

    it( 'Should have the resume controller when the state is set to resume', function(){
      $state.go('resume');
      $rootScope.$digest();
      expect( $state.current.views.main.controller ).toBe('ResumeCtrl');
    });

    it( 'Should have a resume pagetitle', function(){
      $state.go('resume');
      $rootScope.$digest();
      expect( $state.current.data.pageTitle ).toBe('Resume');
    });

  });

  /**
   * describing the controller 
   */
  describe( 'Resume Controller', function(){
    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
      $scope = $rootScope.$new();
      $controller = $injector.get( '$controller' );
      createController = function(){
        return $controller( 'ResumeCtrl', {
          '$scope': $scope
        });
      };
    }));

    it( 'should have a Resume Controller defined', function(){
      var controller = createController();
      expect( controller ).toBeDefined();
    });
  });
});



