(function () {
    "use strict";

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyShoppingController", ToBuyShoppingController)
        .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    function ShoppingListCheckOffService () {
        var service = this;

        var toBuyItems = [
            { name: "Cookies", quantity: 10 },
            { name: "Apples", quantity: 5 },
            { name: "Bananas", quantity: 3 },
            { name: "Cupcakes", quantity: 6 },
            { name: "Donuts", quantity: 12 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (item) {
            // Move from toBuyItems to boughtItems
            var index = toBuyItems.indexOf(item);
            var itemBought = toBuyItems.splice(index, 1)[0];
            boughtItems.push(itemBought);
        };
    }


    ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyShoppingController (ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }


    AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

})();