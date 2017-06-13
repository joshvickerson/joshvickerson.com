app.controller('ProjectController', ['$scope', function($scope) {

  $scope.projects = [
    {
      name: 'Localhost',
      description: 'Vice President and co-founder of Localhost, an open-forum student group at RIT focused on web and mobile application design & development.',
      cover: 'img/localhost_cover.png',
      url: 'http://www.ritlocalhost.com'
    },
    {
      name: 'Scorepad',
      description: 'Scorepad is a simple scorekeeping application for iOS built with the Ionic Framework.',
      cover: 'img/scorepad_cover.png',
      url: 'https://itunes.apple.com/us/app/scorepad-simple-scorekeeper/id996791262'
    },
    {
      name: 'Shitty iPhone Apps',
      description: 'A website on which I reviewed iPhone apps, scoring them by how bad they are rather than how good they are.',
      cover: 'img/shittyiphone_cover.png',
      url: 'http://www.shittyiphoneapps.com'
    },
    {
      name: 'Breakthrough',
      description: 'A networked, multi-threaded, multiplayer game with a chat client implemented in Java. Project completed with three others.',
      cover: 'img/breakthrough_cover.png',
      url: 'https://github.com/jmt521/RIT-Breakthrough'
    }
  ];

}]);
