app.controller('ResumeController',['$scope', '$http', function($scope, $http) {

  $http.get('data/resume.min.json')
    .success(function(data) {
        $scope.resume = data;
    })
    .error(function(data,status,error,config){
        $scope.resume = {"error":"failed to fetch resume data"};
    });
}]);
