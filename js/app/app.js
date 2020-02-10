var app = angular.module('app', [
  'ngRoute',
  'angulartics',
  'angulartics.google.analytics'
]);

app.config([
  '$routeProvider',
  '$locationProvider',
  '$compileProvider',
  function($routeProvider, $locationProvider, $compileProvider) {
    $compileProvider.debugInfoEnabled(false); // comment this line while developing
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
