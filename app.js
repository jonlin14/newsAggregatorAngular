var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "partials/home.html",
    controller: "nytCtrl",
    controller: "nprCtrl"


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

// myApp.config(function($urlRouteProvider) {
//   $urlRouterProvider.otherwise('');
// })
