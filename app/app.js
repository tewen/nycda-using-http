angular.module('http', []).controller('PostCtrl',
    ['$scope', '$http',
        function ($scope, $http) {
            $scope.model = {};
            $scope.postTerms = [
                "name",
                "band",
                "instrument",
                "country",
                "influence"
            ];

            $scope.onUpdate = function () {
                $http({
                    method: 'POST',
                    url: '/post-service-example',
                    data: $scope.model
                }).success(function (response) {
                    $scope.recentPost = JSON.stringify(response);
                });
            };
        }]);