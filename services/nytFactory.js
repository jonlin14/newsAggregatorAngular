myApp.factory('nytFactory', function nytFactory($http) {
  return {
    url: 'http://api.nytimes.com/svc/topstories/v1/home.jsonp?api-key=8b01e99a9719678470fe5f1e20173c4c:12:61993658&callback=JSON_CALLBACK',
    fetch: function() {
      return $http.jsonp(this.url, {cache: true}).then(function(json) {
        return json.data;
      });
    }
  };
});
