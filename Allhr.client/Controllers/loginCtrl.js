(function () {
    angular.module('app').controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', 'loginSvc'];

    function loginCtrl($scope, loginSvc) {
        $scope.cvForm = {};

        $scope.goToServer = function () {
            loginSvc.goToServer().then(function (response) {
                $scope.userName = response.data;
            });
        }

        $scope.checkCvForm = function () {
            return $scope.cvForm.employerName && $scope.cvForm.employerId && $scope.cvForm.employeeName && $scope.cvForm.employeeId;
        }

        $scope.saveData = function () {
            var data = $scope.cvForm;
            loginSvc.saveNewCvForm(cvForm);
        }


    }


})();