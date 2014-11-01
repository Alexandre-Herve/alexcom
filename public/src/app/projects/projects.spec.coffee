describe 'projects', () ->
  $state = $scope = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.projects'

  # describe the projects routing
  describe 'Projects Routing', () ->
    beforeEach inject ($injector) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $state.go 'projects'
      $rootScope.$digest()

    it 'Should load the projects template', () ->
      expect( $state.current.views.main.templateUrl ) \
        .toBe 'projects/projects.tpl.html'

    it 'Should load the projects controller', () ->
      expect( $state.current.views.main.controller ).toBe 'ProjectsCtrl'

    it 'Should have a projects pagetitle', () ->
      expect( $state.current.data.pageTitle ).toBe 'Projects'


  # controller
  describe 'Projects Controller', () ->
    beforeEach inject ( $injector ) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $scope = $rootScope.$new()
      $controller = $injector.get '$controller'
      createController = () ->
        return $controller 'ProjectsCtrl',
          $scope: $scope

    it 'should have a projects Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()


