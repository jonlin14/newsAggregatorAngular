var myApp = angular.module('myApp', ['ui-router'])

myApp.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",

  });
  $stateProvider.state('nyt', {
    url: '/yt',
    templateUrl: "partials/nyt.html"
    controller: "newsCtrl"
  });
})
