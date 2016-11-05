var b2w = angular.module("B2W", ['ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when('/curriculum', {
        templateUrl : 'partials/curriculum.html',
        controller  : 'CurriculumController'
    });

    $routeProvider.otherwise({redirectTo : '/curriculum'});

});