(function () {
    angular.module('app').controller('mainCtrl', mainCtrl);
    mainCtrl.$inject = ['$scope', 'mainSvc'];

    function mainCtrl($scope, mainSvc) {
        //$scope.candidate = {
        //    name: 'כפיר',
        //    surename: 'יפת',
        //    phone1: 0545650865
        //}
        $scope.candidate = {};
        $scope.saveCandidate = function () {
            mainSvc.saveCandidate($scope.candidate).then(function (result) {
                $scope.successSaveDate = true;
            });
        }
    }
})();