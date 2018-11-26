(function(){

'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController', checkContents);

checkContents.$inject = ['$scope'];
function checkContents($scope)
{

$scope.lunchboxitems ="";
$scope.message="";

$scope.itemsSizeCheck = function(){
    itemsCheck($scope.lunchboxitems);
       
   };

function itemsCheck(items)
{
    if(items != null && items != "")
    {
    var itemsList = items.split(',');

    console.log(itemsList);

    if(itemsList.length > 3)
    $scope.message = "This is too much";
    else
    $scope.message="Enjoy!";

    console.log($scope.message);
    }
    else 
    $scope.message="Please enter data first";


 
}



}

})();


