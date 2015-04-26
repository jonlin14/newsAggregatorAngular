myApp.controller('newsCtrl', function newsCtrl($scope, $http, $interval, newsFactory) {
      newsFactory.fetch().then(function(data) {
          $scope.nprPrograms = data.list.story;
      });
  });


//     $scope.addComment = function(item,comment) {
//         item.comments.push(comment);
//
//     }
//
//     $scope.addValue = function(item) {
//         item.vote += 1;
//     }
//     $scope.lowerValue = function(item) {
//         item.vote -= 1;
//     }
//
//     // var nprCall = function() {
//     // $http({
//     //     method: 'JSONP',
//     //     url: 'http://api.npr.org/query?id=1001&fields=all&output=JSON&apiKey=MDE4OTMxNTM0MDE0Mjk2NzAwMzc1ODk3YQ001' + '&callback=JSON_CALLBACK'
//     // }).success(function(data, status) {
//     //     $scope.programs = data.list.story
//     //     for (i = 0; i < $scope.programs.length; i++) {
//     //         $scope.programs[i].vote = 0;
//     //         $scope.programs[i].comments = [];
//     //     }
//     // }).error(function(data,status) {
//     //     console.alert('ERROR')
//     // });
//     // }
//
//     // var nytCall = function() {
//     //   $http({
//     //     method: 'JSONP',
//     //     url: 'http://api.nytimes.com/svc/topstories/v1/home.jsonp?api-key=8b01e99a9719678470fe5f1e20173c4c:12:61993658&callback=JSON_CALLBACK'
//     //   }).success(function(data,status) {
//     //      $scope.nytPrograms = data.results
//     //   }).error(function(data,status) {
//     //     console.log('error111');
//     //   });
//     //
//     //   window.callbackTopStories = function(data) {
//     //     $scope.nytPrograms = data.results;
//     //   }
//       // callbackTopStories = function(data) {
//       //   $scope.nytPrograms = data.results
//       //   for (i = 0; i < $scope.nytPrograms.length; i++) {
//       //       $scope.nytPrograms[i].vote = 0;
//       //       $scope.nytPrograms[i].comments = [];
//       // }
//
//
//       //});
//     //}
//
//
//
//     // nytCall();
//
//     // nprCall();
//     // $interval(nprCall, 10000);
//
//
// });
