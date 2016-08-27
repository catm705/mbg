(function(){
  angular
    .module( 'articles' )
    .controller( "ArticlesController",
      function( $scope, $timeout, $http ) {


        //Put conditional that checks the dbCollection.count
        // If count == 0, save into the db.
        $http.get(' https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json').
          success(
            function( data, status, headers, config ) {
              $scope.contentCollection = data;

              $scope.contentCollection.forEach(
                function( c ) {
                  c.body = String( c.body ).replace(/<[^>]+>/gm, '');
                }
              );

              console.log("$scope.contentCollection: ", $scope.contentCollection );
              // save each object into the db.
            }
          ).
          error( function( data, status, headers, config ) {
            // log error
          } );




      }
    );
} )();
