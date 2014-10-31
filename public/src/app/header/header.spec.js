describe( 'header', function(){
  var $state, $scope, $rootScope, $controller;
  beforeEach( module( 'alexcom.header' ));

  /**
    * describing the controller 
    */
  describe( 'Header Controller', function(){
    beforeEach( inject( function( $injector ){
      $state = $injector.get( '$state' );
      $rootScope = $injector.get( '$rootScope' );
      $scope = $rootScope.$new();
      $controller = $injector.get( '$controller' );
      createController = function(){
        return $controller( 'HeaderCtrl', {
          '$scope': $scope
        });
      };
    }));

    it( 'should have a Header Controller defined', function(){
      var controller = createController();
      expect( controller ).not.toBe( null );
    });

    it( '$state schould be accessible in the $scope', function(){
      var controller = createController();
      expect( $scope.$state ).not.toBe( undefined );
    });
  });

  /**
    * describing the header directive 
    */
  describe( 'axHeader', function(){
    beforeEach( inject( function( $injector ){
      $rootScope = $injector.get( '$rootScope' );
      $compile = $injector.get( '$compile' );
      $scope = $rootScope.$new();
      element = '<div ax-header></div>';
      $state = $injector.get( '$state' );
      $state.$current = 'home';
      element = $compile( element )( $scope );
      $scope.$digest();
    }));

    it('should contain a nav element', function(){
      expect( element.children()[0].nodeName ).toBe( 'NAV' );
    });

    it('should have a home li set to active', function(){
      expect( element.find('ul').children()[0].className ).toBe( 'active' );
    });

    it('should have a resume li not set to active', function(){
      expect( element.find('ul').children()[1].className ).toBe( '' );
    });

  });

});
