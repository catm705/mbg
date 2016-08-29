angular.module( 'articles' )
.controller( "EditController",
  [ '$scope','$routeParams', '$http',
    function ( $scope, $routeParams, $http ) {

      $scope.save = function() {
        console.log("I'm saving.")
      }


      var initializeEditController = function() {
        console.log("EditController.");

        $http.get('/articleslist/' + $routeParams.id )
        .success(
          function( response ) {
            response.forEach( function ( res ) {
              if ( res.id = $routeParams.id ) {
                $scope.article = res;

                console.log($scope.article);

              }
            } );
          }
        );


      }

      initializeEditController();
    }
  ]
);
