(function (){
    "use strict";

    angular.module("MenuApp")
        .config(RoutesConfig);

    RoutesConfig.inject = ["$stateProvider", "$urlRouterProvider"];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "./scripts/templates/home.template.html"
            })

            .state("categories", {
                url: "/categories",
                templateUrl: "./scripts/templates/main-categories.template.html",
                controller: "CategoriesController as ctrl",
                resolve: {
                    categories: ["MenuDataService", function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state("categories.items", {
                url: "/items/{categoryShortName}",
                templateUrl: "./scripts/templates/main-items.template.html",
                controller: "ItemsController as ctrl",
                resolve: {
                    items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            });

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise("/");

    }
})();