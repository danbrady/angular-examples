(function() {
'use strict';

    angular
        .module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['ProfileService', 'MenuService', 'ApiPath'];
    function MyInfoController(ProfileService, MenuService, ApiPath) {
        var vm = this;
        var user = ProfileService.getProfile();

        vm.basePath = ApiPath;

        if (user) {
            vm.user = user;
            MenuService.getMenuItem(vm.user.dish.toUpperCase()).then(function (response) {
                vm.menuItem = response;
            });
        }
    }
})();