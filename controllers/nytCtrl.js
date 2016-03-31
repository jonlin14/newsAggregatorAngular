myApp.controller('nytCtrl', ['$scope', '$http', '$interval', 'nytFactory', function($scope, $http, $interval, nytFactory) {
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

    $scope.addComment = function(item,comment) {
        item.comments.push(comment);
    }
    $scope.addValue = function(item) {
        item.vote += 1;
    }
    $scope.lowerValue = function(item) {
        item.vote -= 1;
    }

  }]);
