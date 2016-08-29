angular.module( 'articles' )
.controller( "EditController",
  [ '$scope','$routeParams', '$http',
    function ( $scope, $routeParams, $http ) {

      $scope.save = function() {
        // With a full stack app - I'd PUT this update to a database.
        // With AngularJS - it automatically updates the change.
      }

      var initializeEditController = function() {
        if ( $routeParams.id && $scope.contentCollection ) {
          $scope.idArray = [];

          $scope.contentCollection.forEach( function( content ) {
            $scope.idArray.push(content.id);

            if ( $routeParams.id && ( content.id == $routeParams.id ) ) {
              $scope.article = content;
            }
          } );

          $scope.index = $scope.idArray.indexOf($routeParams.id);
          $scope.nextArticleId = $scope.idArray[ $scope.index + 1 ];
        }
        else {

        }

      }

      initializeEditController();
    }
  ]
);
