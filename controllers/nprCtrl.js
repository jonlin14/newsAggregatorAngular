myApp.controller('NprCtrl', ['$http', '$interval', 'nprFactory', function($http, $interval, nprFactory) {
		var vm = this;
    nprFactory.fetch().then(function(data) {
        vm.nprPrograms = data.list.story;
        for (i = 0; i < vm.nprPrograms.length; i++) {
						vm.nprPrograms[i].title = vm.nprPrograms[i].title.$text;
						vm.nprPrograms[i].abstract = vm.nprPrograms[i].teaser.$text;
						vm.nprPrograms[i].url = vm.nprPrograms[i].link[0].$text;
					  vm.nprPrograms[i].vote = 0;
            vm.nprPrograms[i].comments = [];
        }

    });



}]);
