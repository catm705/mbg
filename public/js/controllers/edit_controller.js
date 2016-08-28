angular.module( 'articles' )
.controller( "EditController",
  function( $scope, $timeout, $http ) {

    $scope.save = function(){
      console.log("I'm saving.")
    }



    var initializeEditController = function() {

      console.log("EditController!!");
    }

    initializeEditController();
  }
);
