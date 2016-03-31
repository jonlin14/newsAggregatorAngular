myApp.controller('nytCtrl', ['$http', '$interval', 'nytFactory', function($http, $interval, nytFactory) {
    window.callbackTopStories = function(data) {
		var vm = this;
    vm.nytPrograms = data.results;
    for (i = 0; i < vm.nytPrograms.length; i++) {
        vm.nytPrograms[i].vote = 0;
        vm.nytPrograms[i].comments = [];
    }
    }
    nytFactory.fetch().then(function(data) {
        vm.nytPrograms = data.results

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

  }]);
