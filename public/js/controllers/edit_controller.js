(function(){

  angular.module( 'articles')
  .controller( "EditController",
    function( $scope, $timeout, $http ) {



      var initializeEditController = function() {
        //Put conditional that checks the dbCollection.count
        // If count == 0, save into the db.
        $http.get('/articleslist');
        console.log("EditController and views/edit.html")
      }

      initializeEditController();
    }
  );
} )();
