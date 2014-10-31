describe( 'App Module', function() {
  beforeEach( module( 'alexcom' ) );

  describe( 'App Ctrl', function() {

    var AppCtrl, $location, $scope;
    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();
    }));

    it( 'should have a nav function', function(){
      expect( $scope.nav ).toBeDefined();
      $location.path('lol');
      expect( $location.path() ).toBe('/lol');
    });

  });

  describe( 'State otherwise redirection', function(){
    beforeEach( inject( function($injector, $rootScope, _$location_, _$state_){
      $state = _$state_;
      $location = _$location_;
      $location.path('qsdf qsdfsqdfq qsdfqsd');
      $rootScope.$digest();
    }));

    it('Should have been redirected to home state', function(){
      expect( $state.current.url ).toBe('/home');
    });
  });

});
