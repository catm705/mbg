(function(){

  angular.module( 'articles')
  .controller( "ArticleController",
    function( $scope, $timeout, $http ) {

      $scope.save = function(){
        console.log("I'm saving.")
      }



      var initializeArticleController = function() {
        //Put conditional that checks the dbCollection.count
        // If count == 0, save into the db.
        $http.get('/articleslist');
        console.log("ArticleController and views/edit.html")
      }

      initializeArticleController();
    }
  );
} )();
