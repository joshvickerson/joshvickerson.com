app.controller('SocialController',['$scope', '$http', function($scope, $http) {

  $http.get('data/social.json')
    .success(function(data) {
        $scope.social=data;
    })
    .error(function(data,status,error,config){
        $scope.social = {"error":"failed to fetch social data"};
    });
}]);
