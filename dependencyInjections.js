(function(){
    'use strict';
angular.module('DependencyInjection',[])

    .controller('Injection',  DIController)
   
    DIController.inject = ['$scope','$filter'];
 function DIController ($scope, $filter)
{
$scope.name ="";

$scope.upper = function()
{
    var upcase = $filter('uppercase');
    $scope.name = upcase($scope.name);
}
//console.log($injector.annotate(DIController));
};



})();

