(function () {
    angular.module('app').controller('testCtrl', testCtrl);
    testCtrl.$inject = ['$scope'];

    function testCtrl($scope) {

        $scope.series = {
            name: "Gil",
            car: "Fiat",
            age: "16"
        }
    }
})();