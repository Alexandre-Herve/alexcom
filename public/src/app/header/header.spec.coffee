describe 'header', () ->

  $state = $scope = element = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.header'

  # controller
  describe 'Header Controller', () ->
    beforeEach inject ( $rootScope, $controller ) ->

      $scope = $rootScope.$new()
      createController = () ->
        $controller 'HeaderCtrl', $scope: $scope

    it 'should have a header Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()

    it 'should have $state in the $scope', () ->
      controller = createController()
      expect( controller.$state ).not.toBe( undefined )


  # directive
  describe 'axHeader directive', () ->
    beforeEach inject ($rootScope, $compile, $state) ->

      $scope = $rootScope.$new()
      element = '<div ax-header></div>'
      $state.$current = 'home'
      element = $compile(element)($scope)
      $scope.$digest()

    it 'should contain a nav element', () ->
      expect( element.children()[0].nodeName ).toBe( 'NAV' )

    it 'should have a home li set to active', () ->
      expect( element.find('ul').children()[0].className ).toBe 'active'

    it 'should have a resume li not set to active', () ->
      expect( element.find('ul').children()[1].className ).toBe( '' )


