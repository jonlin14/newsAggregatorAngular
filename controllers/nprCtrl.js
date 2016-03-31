myApp.controller('nprCtrl', ['$http', '$interval', 'nprFactory', function($http, $interval, nprFactory) {
		var vm = this;
    nprFactory.fetch().then(function(data) {
        vm.nprPrograms = data.list.story;
        for (i = 0; i < vm.nprPrograms.length; i++) {
            vm.nprPrograms[i].vote = 0;
            vm.nprPrograms[i].comments = [];
        }

    });

    vm.addComment = function(item,comment) {
        item.comments.push(comment);
    }
    vm.addValue = function(item) {
        item.vote += 1;
    }
    vm.lowerValue = function(item) {
        item.vote -= 1;
    }
		vm.name = 'John';
		console.log(vm);
}]);
