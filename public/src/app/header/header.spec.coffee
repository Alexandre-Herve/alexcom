describe 'header', () ->

  $state = $scope = element = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.header'

  # controller
  describe 'Header Controller', () ->
    beforeEach inject ( $injector ) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $scope = $rootScope.$new()
      $controller = $injector.get '$controller'
      createController = () ->
        $controller 'HeaderCtrl', $scope: $scope

    it 'should have a header Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()

    it 'should have $state in the $scope', () ->
      controller = createController()
      expect( $scope.$state ).not.toBe( undefined )


  # directive
  describe 'axHeader directive', () ->
    beforeEach inject ($injector) ->
      $rootScope = $injector.get '$rootScope'
      $compile = $injector.get '$compile'
      $scope = $rootScope.$new()
      element = '<div ax-header></div>'
      $state = $injector.get '$state'
      $state.$current = 'home'
      element = $compile(element)($scope)
      $scope.$digest()

    it 'should contain a nav element', () ->
      expect( element.children()[0].nodeName ).toBe( 'NAV' )

    it 'should have a home li set to active', () ->
      expect( element.find('ul').children()[0].className ).toBe 'active'

    it 'should have a resume li not set to active', () ->
      expect( element.find('ul').children()[1].className ).toBe( '' )


