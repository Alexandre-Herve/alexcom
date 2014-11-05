describe 'App Module', () ->
  beforeEach module 'alexcom'

  $location = $scope = appCtrl = $controller = $state = $rootScope = {}

  describe 'AppCtrl', () ->
    beforeEach inject ( $controller, _$location_, $rootScope ) ->
      $location = _$location_
      $scope = $rootScope.$new()
      appCtrl = $controller 'AppCtrl',
        $location: $location,
        $scope: $scope
        
    it 'should pass a dummy test', inject () ->
      expect(appCtrl).toBeDefined()

    it 'should have a nav function', () ->
      expect( $scope.nav ).toBeDefined()
      $scope.nav( 'lol' )
      expect( $location.path() ).toBe '/lol'

  describe 'State redirection', () ->
    beforeEach inject ( $rootScope, _$location_, _$state_) ->
      $state = _$state_
      $location = _$location_
      $location.path 'qsdq qdfqsdf qsdf qsd'
      $rootScope.$digest()

    it 'Should have been redirected to home state', () ->
      expect( $state.current.url ).toBe '/home'
