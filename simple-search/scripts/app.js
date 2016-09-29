(function () {
    "use strict";

    angular.module("NarrowItDownApp", [])
           .controller("NarrowItDownController", NarrowItDownController)
           .service("MenuSearchService", MenuSearchService)
           .directive("foundItems", FoundItems);

    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        var promise;

        ctrl.getMatchedMenuItems = function () {

            var searchTerm = ctrl.searchTerm;

            promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function (response) {
                ctrl.found = response;
            })
            .catch(function (error) {
                console.log("Something went wrong:", error);
            });
        };

        ctrl.onRemove = function (index) {
            ctrl.found.splice(index, 1);
        };

    }


    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) {

                // process result and only keep items that match
                var allItems = result.data.menu_items;
                var foundItems = [];

                for (var i = 0, length = allItems.length; i < length; i++ ) {
                    if (allItems[i].description.indexOf(searchTerm) !== -1) {
                        foundItems.push(allItems[i]);
                    }
                }

                // return processed items
                return foundItems;

            });
        };
    }


    function FoundItems () {
        var ddo = {
            templateUrl: "foundItemsList.html",
            restrict: "E",
            scope: {
                foundItems: "<foundItems",
                onRemove: "&"
            },
            controller: FoundItemsDirectiveController,
            bindToController: true,
            controllerAs: "ctrl"
        };

        return ddo;
    }

    function FoundItemsDirectiveController () {}

})();