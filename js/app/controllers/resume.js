app.controller('ResumeController',['$scope', '$http', function($scope, $http) {

  $http.get('data/resume.min.json')
    .then(function(data) {
        $scope.resume = data;
    })
    .catch(function(data,status,error,config){
        $scope.resume = {"error":"failed to fetch resume data"};
    });
}]);
