(function () {
    angular.module('app').config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'Views/login.html',
                controller: 'loginCtrl'
            }).when('/main', {
                templateUrl: 'Views/main.html',
                controller: 'mainCtrl'
            }).when('/test', {
                templateUrl: 'Views/test.html',
                controller: 'testCtrl'
            });
        }
    ]);
})();