myApp.factory('nprFactory', function nprFactory($http) {
  return {
    url: 'http://api.npr.org/query?id=1001&fields=all&output=JSON&apiKey=MDE4OTMxNTM0MDE0Mjk2NzAwMzc1ODk3YQ001&callback=JSON_CALLBACK',
    fetch: function() {
      return $http.jsonp(this.url, {cache: true}).then(function(json) {
        return json.data;
      });
    }
  };
});
