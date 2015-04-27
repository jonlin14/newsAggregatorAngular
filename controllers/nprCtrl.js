myApp.controller('nprCtrl', function nprCtrl($scope, $http, $interval, nprFactory) {
    nprFactory.fetch().then(function(data) {
        $scope.nprPrograms = data.list.story;
        for (i = 0; i < $scope.nprPrograms.length; i++) {
            $scope.nprPrograms[i].vote = 0;
            $scope.nprPrograms[i].comments = [];
        }
      
    });
});
