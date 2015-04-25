myApp.controller('newsCtrl', function newsCtrl($scope, $http, $interval) {


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
        }

    }).error(function(data,status) {
        console.alert('ERROR')
    });
    }

    nprCall();
    $interval(nprCall, 100000);


});
