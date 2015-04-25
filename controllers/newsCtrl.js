myApp.controller('newsCtrl', function newsCtrl($scope, $http, $interval) {
    $scope.addComment = function(item,comment) {
        item.comments.push(comment);

    }

    $scope.addValue = function(item) {
        item.vote += 1;
    }
    $scope.lowerValue = function(item) {
        item.vote -= 1;
    }

    var nprCall = function() {
    $http({
        method: 'JSONP',
        url: 'http://api.npr.org/query?id=1001,1003&output=JSON&apiKey=MDE4OTMxNTM0MDE0Mjk2NzAwMzc1ODk3YQ001' + '&callback=JSON_CALLBACK'
    }).success(function(data, status) {
        $scope.programs = data.list.story
        for (i = 0; i < $scope.programs.length; i++) {
            $scope.programs[i].vote = 0;
            $scope.programs[i].comments = [];

        }
        $scope.$watch('programs', console.log('true'))


    }).error(function(data,status) {
        console.alert('ERROR')
    });
    }

    // var usaCall = function() {
    //   $http({
    //     method: 'JSONP',
    //     url: 'http://api.usatoday.com/open/articles/topnews/home?count=10&days=0&page=0&encoding=json&api_key=wvb99kyuhhhnens7f35tab2e' + '&callback=JSON_CALLBACK'
    //   }).success(function(data, status) {
    //     $scope.usaPrograms = data
    //   }).error(function(data,status) {
    //
    //   });
    // }

    var nytCall = function() {
      $http({
        method: 'JSONP',
        url: 'http://api.nytimes.com/svc/topstories/v1/home.jsonp?api-key=8b01e99a9719678470fe5f1e20173c4c:12:61993658&callback=JSON_CALLBACK'
      })
      callbackTopStories = function(data) {
        $scope.nytPrograms = data.results;
      }
      // .success(function(data,status) {
      //   $scope.nytPrograms = data
      // }).error(function(data,status) {

      //});
    }

    nytCall();
  //  usaCall();
    nprCall();
    $interval(nprCall, 100000);


});
