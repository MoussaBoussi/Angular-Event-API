"use strict";

const moreDetails = {
    templateUrl: `app/details/details.html`,

    controller: ["Api", function(Api) {
        const vm = this;
    }]
};



angular
.module("App")
.component("moreDetails", moreDetails);