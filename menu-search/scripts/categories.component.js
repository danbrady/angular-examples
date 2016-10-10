(function (){
    "use strict";

    angular.module("MenuApp")
        .component("categories", {
            templateUrl: "./scripts/templates/categories.template.html",
            bindings: {
                categories: "<"
            }
        });

})();