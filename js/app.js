var app = angular.module('app', [
  'ngRoute'
]);

app.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeController'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

}]); // end config
