angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams, myService ) {

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
          .then(function( data ) {
            $scope.contentCollection = data;

            $scope.contentCollection.forEach(
              function( content ) {
                content.body = String( content.body ).replace(/<[^>]+>/gm, '');
                $http.post( '/articleslist', content );
              }
            );

            $scope.idArray = [];

            $scope.contentCollection.forEach( function( content ) {
              $scope.idArray.push(content.id);

              if ( $routeParams.id && content.id == $routeParams.id ) {
                $scope.article = content;
              }
            } );

            var index = $scope.idArray.indexOf($routeParams.id);
            $scope.nextArticleId = $scope.idArray[ index + 1 ];

          }, function( err ) {
              console.log('Error: ', err );
          } );
        }

        if ( $routeParams.id ) {
          $http.get( '/articleslist/' + $routeParams.id )
          .success( function( res ) {
            console.log(res);
            // debugger;
          } );
        }


      }

      initializeArticlesController();

  }
);
