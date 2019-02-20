"use strict";

const locationPage = {
    templateUrl: `app/location/location.html`,

    controller: ["Api", function(Api) {
        const vm = this;
        vm.sendInfo = function(criteria) {
            Api.setlocationCriteria(criteria)
        }

    }]
};



angular
.module("App")
.component("locationPage", locationPage);