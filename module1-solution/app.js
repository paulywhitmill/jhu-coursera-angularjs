
(function () { //IIFE
  'use strict';

  angular.module('LunchCheck', [])  // set up app
  .controller('LunchCheckController', LunchCheckController); //set up controller

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.lunchItemString = "";

          $scope.splitLunchItemString = function () {

              var lunchItemArray = $scope.lunchItemString.split(",");
              var len = lunchItemArray.length;
              var i ;

              console.log(len);

              for (i = 0; i < len; i++)
                  /\S/.test(lunchItemArray[i]) && lunchItemArray.push(lunchItemArray[i]);

              console.log(lunchItemArray);

              lunchItemArray.splice(0, len);

              console.log(lunchItemArray);

              lunchMessage(lunchItemArray);

          }; // function splitLunchItemString

          function lunchMessage(array) {
            var len = array.length;

            console.log(len);

            $scope.message = "";
            if (len > 0 && len <= 3) {$scope.message = "Enjoy!";
                                      $scope.borderWidthColor = '5px solid green';
                                      $scope.textColor = 'green';
            } else if (len > 3) {$scope.message = "Too much!";
                                  $scope.borderWidthColor = '5px solid green';
                                  $scope.textColor = 'green';
            } else if (len == 0) {$scope.message = "Please enter data first";
                                  $scope.borderWidthColor = '5px solid red';
                                  $scope.textColor = 'red';
            }


          }; // function lunchMessage

  }; // function LunchCheckController


})();//IIFE
