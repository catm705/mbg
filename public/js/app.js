( function() {
  var myApp = angular.module( 'articles', [ 'ngRoute' ] );

  myApp.config(['$routeProvider','$locationProvider',
    function( $routeProvider, $locationProvider ) {
      $routeProvider
      .when('/', {
         templateUrl: '/views/list.html',
         controller: 'ArticlesController'
      })

      .when('/articles/edit/:id', {
         templateUrl: '/views/edit.html',
         controller: 'ArticleController'
      })
      .otherwise({
         redirectTo: '/'
      } );
    }
  ]);


} )();
