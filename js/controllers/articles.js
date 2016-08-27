(function(){
  angular
    .module( 'articles' )
    .controller( "ArticlesController",
      function( $scope, $timeout, $http ) {
        
        $http.get(' https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json').
          success(
            function( data, status, headers, config ) {
              $scope.contentCollection = data;
              console.log("$scope.contentCollection: ", $scope.contentCollection );
            }
          ).
          error( function( data, status, headers, config ) {
            // log error
          });

      }
    );
} )();
