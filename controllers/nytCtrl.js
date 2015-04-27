myApp.controller('nytCtrl', function nytCtrl($scope, $http, $interval, nytFactory) {
    window.callbackTopStories = function(data) {
    $scope.nytPrograms = data.results;
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

  });
