(function ( app ) {
  'use strict';

    app.factory( 'myService', MyService );

    MyService.$inject = ['$q', '$http'];

    function MyService( $q, $http ) {
        var data;

        var service = {
            getData: getData
        };

        return service;

        function getData( refresh ) {
          if ( refresh || !data ) {
              return $http.get('https://s3.amazonaws.com/mbgd/feed/prod-test-7fc12640-6f09-4461-b683-3e55acdfd4f4.json')
              .then( function( data ) {
                console.log(data.data);
                  // this.data = data.data;
                  return data.data;
              })
          }
          else {
              var deferrer = $q.defer();
              deferrer.resolve(data);
              return deferrer.promise;
          }
        }
    }

} ( angular.module( 'articles' ) ));
