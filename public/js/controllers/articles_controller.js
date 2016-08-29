angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http, $routeParams, myService ) {

      var initializeArticlesController = function() {
        myService.getData()
        .then(function( data ){
          $scope.contentCollection = data;
          console.log("contentCollection:", $scope.contentCollection);

          // if ( $scope.contentCollection.length == 0 ) {
            $scope.contentCollection.forEach(
              function( content ) {
                content.body = String( content.body ).replace(/<[^>]+>/gm, '');

                $http.post( '/articleslist', content );
              }
            );
          // }



        }, function( err ) {
            console.log('Error: ', err );
        });

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

              console.log("$scope.idArray: ", $scope.idArray);
            }
          );

      }

      initializeArticlesController();

  }
);
