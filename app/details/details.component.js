"use strict";

const moreDetails = {
    templateUrl: `app/details/details.html`,
    controller: ["Api", function(Api) {
        const vm = this;
        vm.$onInit = function() {
            vm.info = Api.getMoreDetails()
        }
        vm.favoriteItem = function(event) {
            Api.checkFavorites(event)
        }
    }]
};



angular
.module("App")
.component("moreDetails", moreDetails);