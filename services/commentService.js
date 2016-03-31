myApp.service('commentService', function() {
	var vm = this;

	vm.addComment = function(item,comment) {
			item.comments.push(comment);
	}
	vm.addValue = function(item) {
			item.vote += 1;
	}
	vm.lowerValue = function(item) {
			item.vote -= 1;
	}
})
