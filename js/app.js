var app = angular.module('app', [
  'ngRoute',
  'angulartics',
  'angulartics.google.analytics'
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
      when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: 'ProjectController'
      }).
      otherwise({
        redirectTo: '/'
      });

}]); // end config
