myApp.factory('newsFactory', function newsFactory($http) {
  // var factory = {};
  //
  //
  //
  // factory.addValue = function(item) {
  //   item.vote += 1;
  // }
  //
  // factory.lowerValue = function(item){
  //   item.vote -= 1;
  // }
  //
  // newsFactory.nprCall = function() {
  //     $http.jsonp('http://api.npr.org/query?id=1001&fields=all&output=JSON&apiKey=MDE4OTMxNTM0MDE0Mjk2NzAwMzc1ODk3YQ001&callback=JSON_CALLBACK').then(function(result) {
  //         return result
  //     });
  // }
  //

  return {
    url: 'http://api.npr.org/query?id=1001&fields=all&output=JSON&apiKey=MDE4OTMxNTM0MDE0Mjk2NzAwMzc1ODk3YQ001&callback=JSON_CALLBACK',
    fetch: function() {
      return $http.jsonp(this.url, {cache: true}).then(function(json) {
        return json.data;
      });
    }
  };
});




  // return factory;
