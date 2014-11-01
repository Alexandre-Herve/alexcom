describe 'home', () ->
  $state = $scope = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.home'

  # describe the home routing
  describe 'Home Routing', () ->
    beforeEach inject ($injector) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $state.go 'home'
      $rootScope.$digest()

    it 'Should load the home template', () ->
      expect( $state.current.views.main.templateUrl ).toBe 'home/home.tpl.html'

    it 'Should load the home controller', () ->
      expect( $state.current.views.main.controller ).toBe 'HomeCtrl'

    it 'Should have a home pagetitle', () ->
      expect( $state.current.data.pageTitle ).toBe 'Home'


  # controller
  describe 'Home Controller', () ->
    beforeEach inject ( $injector ) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $scope = $rootScope.$new()
      $controller = $injector.get '$controller'
      createController = () ->
        return $controller 'HomeCtrl',
          $scope: $scope

    it 'should have a home Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()

