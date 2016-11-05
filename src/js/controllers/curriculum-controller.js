b2w.controller("CurriculumController", ['$scope', 'AboutService',
function($scope, aboutSrv) {

    $scope.data = {};

    // getting user data
    aboutSrv.getData((data) => {
        console.log("aqui no call", data);
        $scope.data = data;
    });

}]);