( function() {
  var myApp = angular.module( 'articles', [ 'ngRoute' ] );

  myApp.config(['$routeProvider','$locationProvider',
    function( $routeProvider, $locationProvider ) {
      $routeProvider
      .when('/', {
         templateUrl: '/views/list.html',
         controller: 'ArticlesController'
      })

      .when('/edit/:id', {
         templateUrl: '/views/edit.html',
         controller: 'EditController'
      })
      .otherwise({
         redirectTo: '/'
      } );
    }
  ]);


} )();
