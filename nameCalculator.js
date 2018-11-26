(function()
{
    'use strict';
    angular.module('NameCalculator',[])

    .controller('NumericValue', function($scope)
{
    $scope.name ="ABCD";
    $scope.number = 0;

    console.log($scope.name);

    $scope.keyUpFunction = function(){
     $scope.number =  nameCalculator($scope.name);
        
    };

    function nameCalculator(name)
    {
        var totalVal=0;
        for(var i=0;i<name.length;i++)
        {
         //   console.log( name.charCodeAt(i));
        totalVal = totalVal + name.charCodeAt(i);
        }
       // console.log(totalVal);
        return totalVal;
    }
})
})();