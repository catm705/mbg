angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams ) {

      var initializeArticlesController = function() {
        $scope.idArray = [];


        $http.get('/articleslist')
          .success(
            function( response ) {
              $scope.contentCollection = response;

              $scope.contentCollection.forEach( function( content ) {
                $scope.idArray.push(content.id);

                if ( $routeParams.id && content.id == $routeParams.id ) {
                  $scope.article = content;
                }
              } );

              var index = $scope.idArray.indexOf($routeParams.id);
              $scope.nextArticleId = $scope.idArray[ index + 1 ];
            }
          );

      }

      initializeArticlesController();

  }
);
