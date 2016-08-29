angular.module( 'articles')
.controller( "ApplicationController",
[ '$scope', '$http', 'myService',
  function( $scope, $http, myService ) {

      var applicationControllerInitialize = function() {
        $scope.contentColletion;
        // $scope.empty = true;
        //
        // if ( $scope.empty ) {
        //   $http.get('https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json').
        //     success(
        //       function( data, status, headers, config ) {
        //         $scope.articlesContent = data;
        //
        //         $scope.articlesContent.forEach(
        //           function( content ) {
        //             content.body = String( content.body ).replace(/<[^>]+>/gm, '');
        //
        //             $http.post( '/articleslist', content );
        //           }
        //         );
        //
        //       }
        //     ).
        //     error( function( data, status, headers, config ) {
        //       console.log(status);
        //     }
        //   );
        //
        //   $scope.empty = false;
        // }

        // myService.getData()
        // .then(function( data ){
        //   $scope.contentCollection = data;
        //   console.log("contentCollection:", data);
        //     //use data here
        // }, function(err) {
        //     //Handle error here
        // });

      }

      applicationControllerInitialize();

  }
]);
