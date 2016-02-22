angular.module('GaoApp', [])
    .controller('GaoController', function($scope,$http) {
        this.joseph = '高压球 (Joseph Kauw-A-Tjoe)'; 

        $http.get('gao.json')
                .success(function(data) {
                    $scope.contents=data;
                })
        .error(function(data,status,error,config){
            $scope.contents = [{heading:"Error",description:"Could not load json data"}];
        });
    });  
