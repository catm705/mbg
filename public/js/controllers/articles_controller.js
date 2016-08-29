angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams, $rootScope, myService ) {
    
    $scope.contentCollection;
    $scope.idArray = [];


    $scope.save = function( ) {
      console.log("Saving...");

    }


      var initializeArticlesController = function() {
        myService.getData()
        .then( function( data ) {
          $scope.contentCollection = data;

          $scope.contentCollection.forEach(
            function( content ) {
              content.body = String( content.body ).replace(/<[^>]+>/gm, '');



              $scope.contentCollection.forEach( function( content ) {
                $scope.idArray.push(content.id);

                if ( $routeParams.id && ( content.id == $routeParams.id ) ) {
                  $scope.article = content;
                }
              } );

              var index = $scope.idArray.indexOf($routeParams.id);
              $scope.nextArticleId = $scope.idArray[ index + 1 ];
            }
          );

        }, function( err ) {
            console.log('Error: ', err );
        } );
      }


      initializeArticlesController();

  }
);
