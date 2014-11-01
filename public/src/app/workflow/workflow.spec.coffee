describe 'workflow', () ->
  $state = $scope = $rootScope = $controller = createController = {}

  beforeEach module 'alexcom.workflow'

  # describe the workflow routing
  describe 'Workflow Routing', () ->
    beforeEach inject ($injector) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $state.go 'workflow'
      $rootScope.$digest()

    it 'Should load the workflow template', () ->
      expect( $state.current.views.main.templateUrl )\
        .toBe 'workflow/workflow.tpl.html'

    it 'Should load the workflow controller', () ->
      expect( $state.current.views.main.controller )\
        .toBe 'WorkflowCtrl'

    it 'Should have a workflow pagetitle', () ->
      expect( $state.current.data.pageTitle )\
        .toBe 'Workflow'


  # controller
  describe 'Workflow Controller', () ->
    beforeEach inject ( $injector ) ->
      $state = $injector.get '$state'
      $rootScope = $injector.get '$rootScope'
      $scope = $rootScope.$new()
      $controller = $injector.get '$controller'
      createController = () ->
        return $controller 'WorkflowCtrl',
          $scope: $scope

    it 'should have a workflow Controller defined', () ->
      controller = createController()
      expect( controller ).toBeDefined()


