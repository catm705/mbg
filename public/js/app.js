( function() {
  var myApp = angular.module( 'articles', [ 'ngRoute' ] );

  myApp.config(['$routeProvider','$locationProvider',
    function( $routeProvider, $locationProvider ) {
      $routeProvider
      .when('/', {
         templateUrl: '/views/list.html'
      })

      .when('/edit/:id', {
         templateUrl: '/views/edit.html'
      })
      .otherwise({
         redirectTo: '/'
      } );
    }
  ]);


} )();
