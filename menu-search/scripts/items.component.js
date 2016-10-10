(function (){
    "use strict";

    angular.module("MenuApp")
        .component("items", {
            templateUrl: "./scripts/templates/items.template.html",
            bindings: {
                items: "<"
            }
        });

})();