"use strict";

const locationPage = {
    templateUrl: `app/location/location.html`,

    controller: ["Api", function(Api) {
        const vm = this;
    }]
};



angular
.module("App")
.component("locationPage", locationPage);