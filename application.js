articles.config(['$routeProvider',
  function( $routeProvider ) {
     $routeProvider.
       when('/', {
          templateUrl: 'public/list.html',
          controller: 'ArticlesController'
       }).

       when('/edit', {
          templateUrl: 'public/edit.html',
          controller: 'EditController'
       }).

       otherwise({
          redirectTo: '/'
       } );

  }
] );
