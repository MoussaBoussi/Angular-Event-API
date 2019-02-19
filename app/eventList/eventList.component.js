"use strict";

const eventList = {
    templateUrl: `app/eventList/eventList.html`,

    controller: ["Api", function(Api) {
        const vm = this;
    }]
};



angular
.module("App")
.component("eventList", eventList);