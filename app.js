var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "partials/home.html",
    controller: "NytCtrl",
    controller: "NprCtrl"


  });
  $stateProvider.state('nyt', {
    url: '/nyt',
    templateUrl: "partials/nyt.html",
    controller: "NytCtrl",
		controllerAs: "nyt",
  });
  $stateProvider.state('npr', {
    url: '/npr',
    templateUrl: "partials/npr.html",
    controller: "NprCtrl",
		controllerAs: "npr",
  });
  $urlRouterProvider.otherwise('/');

})

myApp.directive('headlines', function() {
	return {
		restrict: 'AE',
		replace: true,
		templateUrl: 'directives/headlines.html',
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
