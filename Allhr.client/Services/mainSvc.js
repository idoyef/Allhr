(function () {
    angular.module('app').service('mainSvc', mainSvc);
    mainSvc.$inject = ['$http'];

    function mainSvc($http) {
        this.saveCandidate = function (candidate) {
            return $http({
                url: 'http://localhost:50351/api/Account/SaveCandidate',
                data: candidate,
                method: 'POST',
                headers: { 'Authorization': 'bearer KTdFlgeau57DQnKyxNfDCxt6HnJa5YL-s8agHXRt0riiQVgboXoHRTX09zHwZgBg-7K6LM6tlMsE7SdRcjcI4di8wWCKMLfWP5LBrnAikHC2yX4uz_UICinzcH7V5IGeFMdAtoOXEBbLJSu_ngo3sGNLCrwCJ-4JcQedfjim71KgfQYEIXZ5_AgtDFreC8PJnSeIshlsRaANwRN-FLLDiwlt4bUKwEuTbSYPv2D90DGJsxnCPlCsm05-DlyZgtWhtPC0lYQpxRwST9-WujOg2CrS4WyRVhJc0TB7XAMjuko4jXrjNhDmTpo9gLFaPdjejwIBeAm7oPWXRkuuR4NmbLhqxeNXKQhfmiUXyz_-YgrAdLyq8SDt-jd4t4NNp4CnKa8hhBZwcjw1NHZYn0pH_J-joSwgYqTHNYgJO7uRQwM30xoZKRz4Hci5N0E9VPUkIkSbXVN3y30ENM6nsiuf4qbm7-A8op4T5fR9P1W8Cwc' }
            });
        }

    }


})();