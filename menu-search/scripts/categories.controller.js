(function (){
    "use strict";

    angular.module("MenuApp")
        .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["$stateParams", "categories"];
    function CategoriesController($stateParams, categories) {
        var ctrl = this;

        ctrl.categories = categories.data;
    }
})();