(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'ProfileService']
    function SignUpController(MenuService, ProfileService) {
        var vm = this;

        vm.user = ProfileService.getProfile() || {};

        vm.submit = function () {
            vm.completed = false;
            vm.invalidDish = false;

            MenuService.getMenuItem(vm.user.dish.toUpperCase()).then(function (response) {
                var user = {
                    first: vm.user.first,
                    last: vm.user.last,
                    phone: vm.user.phone,
                    email: vm.user.email,
                    dish: vm.user.dish
                }
                ProfileService.setProfile(user);
                vm.completed = true;
            }).catch(function (error) {
                vm.invalidDish = true;
            });
        }
    }
})();