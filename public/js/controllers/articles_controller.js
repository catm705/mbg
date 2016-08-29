angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams, $rootScope, myService ) {

    $scope.save = function( ) {
      console.log("Saving...");
      $http.put( '/articleslist/' + $routeParams.id )
      .success( function( res ) {
        console.log(res);
        debugger;
      } );
    }


      var initializeArticlesController = function() {
        if ( !$scope.contentCollection ) {
          myService.getData()
          .then( function( data ) {
            $scope.contentCollection = data;

            $scope.contentCollection.forEach(
              function( content ) {
                content.body = String( content.body ).replace(/<[^>]+>/gm, '');
                $http.post( '/articleslist', content );
              }
            );

          }, function( err ) {
              console.log('Error: ', err );
          } );
        }
      }

      initializeArticlesController();

  }
);
