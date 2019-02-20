"use strict";

const bucketListPage = {
    templateUrl: `app/bucketListPage/bucketListPage.html`,
    controller: ["Api", function(Api) {
        const vm = this;
        vm.favoriteList= []
        vm.$onInit = function(){
            vm.favoriteList = Api.getFavoriteList();
        }
        vm.deleteItem = function(index){
           vm.favoriteList = Api.deleteFavorite(index);
        }
    }]
};



angular
.module("App")
.component("bucketListPage", bucketListPage);