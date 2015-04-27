myApp.controller('nytCtrl', function nytCtrl($scope, $http, $interval, nytFactory) {
    window.callbackTopStories = function(data) {
    $scope.nytPrograms = data.results;
    for (i = 0; i < $scope.nytPrograms.length; i++) {
        $scope.nytPrograms[i].vote = 0;
        $scope.nytPrograms[i].comments = [];
    }
    }
    nytFactory.fetch().then(function(data) {
        $scope.nytPrograms = data.results

    });


  });
