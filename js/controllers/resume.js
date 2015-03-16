app.controller('ResumeController',['$scope', '$http', function($scope, $http) {

  $http.get('data/resume.json')
    .success(function(data) {
        $scope.resume=data;
        console.log($scope.resume);
    })
    .error(function(data,status,error,config){
        $scope.resume = {"error":"failed to fetch resume data"};
    });
}]);
