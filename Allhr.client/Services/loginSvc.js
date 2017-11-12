(function () {
    angular.module('app').service('loginSvc', loginSvc);
    loginSvc.$inject = ['$http'];

    function loginSvc($http) {
        this.goToServer = function () {
            return $http({
                url: 'http://localhost:50351/api/Account/GetUser',
                method:'GET'
            });
        }

    }


})();