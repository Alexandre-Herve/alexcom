describe( 'home', function(){
  var $state, $scope, $rootScope, $controller;
  beforeEach( module( 'alexcom.home' ));

  /**
    * describing the route config
    */
   describe( 'Home Routing', function(){

     beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
     }));

     it( 'Should have the home template when the state is set to home', function(){
       $state.go('home');
       $rootScope.$digest();
       expect( $state.current.views.main.templateUrl ).toBe('home/home.tpl.html');
     });

     it( 'Should have the home controller when the state is set to home', function(){
       $state.go('home');
       $rootScope.$digest();
       expect( $state.current.views.main.controller ).toBe('HomeCtrl');
     });

     it( 'Should have a home pagetitle', function(){
       $state.go('home');
       $rootScope.$digest();
       expect( $state.current.data.pageTitle ).toBe('Home');
     });
   });

  /**
    * describing the controller 
    */
  describe( 'Home Controller', function(){
    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
      $scope = $rootScope.$new();
      $controller = $injector.get( '$controller' );
      createController = function(){
        return $controller( 'HomeCtrl', {
          '$scope': $scope
        });
      };
    }));

    it( 'should have a Home Controller defined', function(){
      var controller = createController();
      expect( controller ).toBeDefined();
    });
  });
});

