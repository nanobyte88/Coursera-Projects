(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', function($scope){

  $scope.farray = " ";

  $scope.messageText = " ";

  $scope.testValue  = 0;


  $scope.displayNumeric = function () {

    var totalValue = splitString($scope.farray,',');
    $scope.testValue  = totalValue;

    if((totalValue <=2) && (totalValue >= 1))
    {
      $scope.messageText = "Enjoy";
    }
    else if(totalValue >=3)
    {
      $scope.messageText = "Too much";
    }
    else if(totalValue == 0)
    {
      $scope.messageText = "Insert Data";
    }


  };

  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    var value = arrayOfStrings.length-1;

    return value;
  }

  function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

});

})();
