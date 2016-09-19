(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

    $scope.checkLunch = function () {

        var lunchItems = $scope.lunchItems;
        var count = 0;
        var lunchItemsFiltered = null;

        var hasError = function () {
           $scope.message = "Please enter data first";
           $scope.hasError = true;
        };

        var isSuccessful = function (msg) {
            $scope.message = msg;
            $scope.hasSuccess = true;
        };

        $scope.hasError = false;
        $scope.hasSuccess = false;

        if (!lunchItems) {

            hasError();

        } else {

            lunchItemsFiltered = lunchItems.split(',').filter( function (item) {
                return item.trim() !== '';
            });

            count = lunchItemsFiltered.length;

            $scope.lunchItems = lunchItemsFiltered.join(',');

            if (count === 0) {
                hasError();
            } else {
                if (lunchItemsFiltered.length <=3) {
                    isSuccessful("Enjoy!");
                } else {
                    isSuccessful("Too Much!");
                }
            }
        }
    };
}

})();