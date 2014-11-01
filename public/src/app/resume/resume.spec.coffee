describe 'resume', () ->
  $state = $scope = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.resume'

  # describe the resume routing
  describe 'Resume Routing', () ->
    beforeEach inject ($injector) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $state.go 'resume'
      $rootScope.$digest()

    it 'Should load the resume template', () ->
      expect( $state.current.views.main.templateUrl )\
        .toBe 'resume/resume.tpl.html'

    it 'Should load the resume controller', () ->
      expect( $state.current.views.main.controller )\
        .toBe 'ResumeCtrl'

    it 'Should have a resume pagetitle', () ->
      expect( $state.current.data.pageTitle )\
        .toBe 'Resume'


  # controller
  describe 'Resume Controller', () ->
    beforeEach inject ( $injector ) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $scope = $rootScope.$new()
      $controller = $injector.get '$controller'
      createController = () ->
        return $controller 'ResumeCtrl',
          $scope: $scope

    it 'should have a resume Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()


