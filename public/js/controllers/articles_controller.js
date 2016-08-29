angular.module( 'articles')
.controller( "ArticlesController",
  function( $scope, $http ) {

      var initializeArticlesController = function() {


        $http.get('/articleslist')
          .success(
            function( response ) {
              $scope.contentCollection = response;
            }
          );




      }

      initializeArticlesController();

  }
);
