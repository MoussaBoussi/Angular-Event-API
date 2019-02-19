"use strict";

angular
.module("App")
.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/search", {
        template: "<search-criteria></search-criteria>"
    })
    .when("/favorites", {
        template: "<bucket-list-page></bucket-list-page>"

    })
    .when("/location", {
        template: "<location-page></location-page>"

    })
    .when("/eventList", {
        template: "<event-list></event-list>"

    })
    .when("/details", {
        template: "<more-details></more-details>"

    })
    .otherwise({ redirectTo: "/location"})
}]);
