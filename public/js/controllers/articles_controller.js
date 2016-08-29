angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams, $rootScope, myService ) {

    $scope.contentCollection;
    $scope.idArray = [];

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
          }
        );

      }, function( err ) {
          console.log( err );
      } );
    }

    initializeArticlesController();

  }
);
