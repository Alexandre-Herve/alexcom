angular.module( 'alexcom', [
  'ui.router',
  'ui.bootstrap',

  'alexcom.home',
  'alexcom.header',
  'alexcom.resume',
  'alexcom.projects',
  'alexcom.workflow'
])

.config( ['$stateProvider', '$urlRouterProvider', function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
}])

.run( [function run () {
}])

.controller( 'AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Alexandre Hervé' ;
    }
  });

  $scope.nav = function( path ){
    console.log( path );
    $location.path( path );
  };
}])

;

