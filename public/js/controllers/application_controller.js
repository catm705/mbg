angular.module( 'articles')
.controller( "ApplicationController",
  function( $scope, $http ) {

      var applicationControllerInitialize = function() {
        $scope.empty = true;

        if ( $scope.empty ) {
          $http.get('https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json').
            success(
              function( data, status, headers, config ) {
                $scope.contentCollection = data;

                $scope.contentCollection.forEach(
                  function( content ) {
                    content.body = String( content.body ).replace(/<[^>]+>/gm, '');

                    $http.post( '/articleslist', content );
                  }
                );

              }
            ).
            error( function( data, status, headers, config ) {
              console.log(status);
            }
          );

          $scope.empty = false;
        }

      }

      applicationControllerInitialize();

  }
);
