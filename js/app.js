angular.module('joshvickerson', [
  'ngRoute'
])

.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/', {
        templateURL: 'templates/resume.html',
        controller: 'ResumeController'
      }).
      otherwise({
        redirectTo: '/'
      });

}]); // end config
