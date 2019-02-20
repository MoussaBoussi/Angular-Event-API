"use strict";

const bucketListPage = {
    templateUrl: `app/bucketListPage/bucketListPage.html`,
    controller: ["Api", function(Api) {
        const vm = this;
        vm.favoriteList= []
        vm.$onInit = function(){
            vm.favoriteList = Api.getFavoriteList();
        }
        vm.deleteItem = function(item){
           vm.favoriteList = Api.deleteFavorite(item);
        }
    }]
};



angular
.module("App")
.component("bucketListPage", bucketListPage);