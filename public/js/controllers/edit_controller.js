angular.module( 'articles' )
.controller( "EditController",
  [ '$scope','$routeParams', '$http',
    function ( $scope, $routeParams, $http ) {

      $scope.save = function() {
        // With a full stack app - you'd save this update to a database.
        // With AngularJS - it automatically updates the change.
      }


      var initializeEditController = function() {
        $scope.idArray = [];

        $scope.contentCollection.forEach( function( content ) {
          $scope.idArray.push(content.id);

          if ( $routeParams.id && ( content.id == $routeParams.id ) ) {
            $scope.article = content;
          }
        } );

        var index = $scope.idArray.indexOf($routeParams.id);

        $scope.nextArticleId = $scope.idArray[ index + 1 ];


      }

      initializeEditController();
    }
  ]
);
