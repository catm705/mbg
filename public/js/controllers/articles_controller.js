angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http ) {


      var initializeArticlesController = function() {
        console.log("ArticlesController!!");
      }

      initializeArticlesController();

  }
);
