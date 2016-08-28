angular.module( 'articles')
.controller( "ArticleController",
  function( $scope, $timeout, $http ) {

    $scope.save = function(){
      console.log("I'm saving.")
    }



    var initializeArticleController = function() {

      console.log("ArticleController and views/edit.html")
    }

    initializeArticleController();
  }
);
