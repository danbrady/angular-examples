(function () {
    "use strict";

    angular.module('public')
        .factory('ProfileService', ProfileService);

    function ProfileService() {

        var service = this;

        return {
            getProfile: function () {
                return service.user;
            },
            setProfile: function (user) {
                service.user = user;
            }

        }
    }
})();