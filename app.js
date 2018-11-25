(function()
{
    'use strict';
    angular.module('myFirstApp',[])
    

    .controller('myFirstController', function($scope){
        console.log("In controller");
        $scope.name ="ABCDEF";
        $scope.sayHi = function(){
            return "Hi";
        }
    })
})();