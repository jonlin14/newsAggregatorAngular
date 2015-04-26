var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"

  });
  $stateProvider.state('nyt', {
    url: '/nyt',
    templateUrl: "partials/nyt.html",
    controller: "newsCtrl"
  });
  $stateProvider.state('npr', {
    url: '/npr',
    templateUrl: "partials/npr.html",
    controller: "newsCtrl"
  });
})
