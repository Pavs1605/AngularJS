(function (){
    'use strict';
angular.module('Int',[])

    .controller('Printaaaa', function($scope){
    console.log("inside controller");
$scope.abcd ="ABCDDD";
console.log($scope.abcd);
$scope.sayHi = function(){
    return "hello welcome to angular";
}

console.log($scope.sayHi());
})


})();