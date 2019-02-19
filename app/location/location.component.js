"use strict";

const locationPage = {
    templateUrl: `app/location/location.html`,

    controller: ["Api", function(Api) {
        const vm = this;

        console.log("edsghdry  grdxg");
        vm.sendInfo = function(criteria) {
            console.log("edsghdry  grdxg");
            Api.setlocationCriteria(criteria)
        }

    }]
};



angular
.module("App")
.component("locationPage", locationPage);