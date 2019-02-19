"use strict";

const bucketListPage = {
    templateUrl: `app/bucketListPage/bucketListPage.html`,

    controller: ["Api", function(Api) {
        const vm = this;
    }]
};



angular
.module("App")
.component("bucketListPage", bucketListPage);