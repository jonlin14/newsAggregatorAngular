myApp.directive('headlines', function() {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'directives/directiveTemplates/headlines.html',
		bindToController: true,
		scope: {
			item : '=',
			addValue: '&',
			lowerValue: '&',
			addComment: '&',
		},
		link: function(scope, elements, attributes) {
			scope.addValue = function(item) {
					item.vote += 1;
			},
			scope.addComment = function(item,comment) {
						item.comments.push(comment);
			},
			scope.lowerValue = function(item) {
						item.vote -= 1;
				}
		}
	}
});
