"use strict";

angular
.module("App")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/search", {
        template: "<searchCriteria></searchCriteria>"
    })
    .when("/favorites", {
        template: "<bucketListPage></bucketListPage>"

    })
    .when("/location", {
        template: "<locationPage></locationPage>"

    })
    .when("/eventList", {
        template: "<eventList></eventList>"

    })
    .when("/details", {
        template: "<moreDetails></moreDetails>"

    })
}]);