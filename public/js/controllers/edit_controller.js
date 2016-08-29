angular.module( 'articles' )
.controller( "EditController",
  [ '$scope','$routeParams', '$http',
    function ( $scope, $routeParams, $http ) {

      // $scope.form = {
      //   changed: false
      // }

      $scope.save = function() {
        console.log("I'm saving.")
      }


      var initializeEditController = function() {
        $http.get( '/articleslist/' )
        .success(
          function( response ) {
            $scope.contentCollection = response;

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
        );

        // $scope.$watch('article', function( newVal, oldVal ) {
        //     console.log('invoked');
        //     $scope.form.changed = true;
        // }, true);
      }

      initializeEditController();
    }
  ]
);
