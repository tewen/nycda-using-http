describe("questions", function () {
    var $scope,
        $http,
        controller;

    beforeEach(module('http', {
        $http: jasmine.createSpy('$http').andReturn({success: function (fn) {
            fn($scope.model);
        }})
    }));
    beforeEach(inject(function ($controller, $rootScope, _$http_) {
        $scope = $rootScope.$new();
        $http = _$http_;
        controller = $controller('PostCtrl', {$scope: $scope});
    }));

    describe("Initialization", function () {
        it("Should set the $scope.model to an empty object", function () {
            expect($scope.model).toEqual({});
        });

        it("Should instantiate the postTerms", function () {
            expect($scope.postTerms).toEqual([
                "name",
                "band",
                "instrument",
                "country",
                "influence"
            ]);
        });
    });

    describe("Action Handlers", function () {
        describe("onUpdate", function () {

            it("Should call the $http with the method, url, and data", function () {
                $scope.model = {name: "Lemmy Kilmister"};
                $scope.onUpdate();
                expect($http).toHaveBeenCalledWith({
                    method: 'POST',
                    url: '/post-service-example',
                    data: $scope.model
                });
            });

            it("Should set the $scope.recentPost to the stringified version of the response", function () {
                $scope.model = {name: "Ronnie James Dio"};
                $scope.onUpdate();
                expect($scope.recentPost).toEqual(JSON.stringify({name: "Ronnie James Dio"}));
            });
        });
    });
});