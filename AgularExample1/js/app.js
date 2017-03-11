var app = angular.module('myApp', ['ngRoute']);

app.controller('HeaderController', function($scope) {
  
    $scope.header = 'YOUR NAME HERE';
    });

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'templates/home.html',
    controller  : 'HomeController'
  })

  .when('/contact', {
    templateUrl : 'templates/contact.html',
    controller  : 'ContactController'
  })

  .when('/resume', {
    templateUrl : 'templates/resume.html',
    controller  : 'ResumeController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('ContactController', function($scope) {
  $scope.message = 'Hello from ContactController';
});

app.controller('ResumeController', function($scope) {
  $scope.message = 'Hello from ResumeController';
});