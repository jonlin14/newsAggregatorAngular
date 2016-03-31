myApp.controller('NprCtrl', ['$http', '$interval', 'nprFactory', 'commentService', function($http, $interval, nprFactory, commentService) {
		var vm = this;
    nprFactory.fetch().then(function(data) {
        vm.nprPrograms = data.list.story;
        for (i = 0; i < vm.nprPrograms.length; i++) {
            vm.nprPrograms[i].vote = 0;
            vm.nprPrograms[i].comments = [];
        }

    });

    vm.addComment = commentService.addComment;

    vm.addValue = commentService.addValue;

    vm.lowerValue = commentService.lowerValue;

}]);
