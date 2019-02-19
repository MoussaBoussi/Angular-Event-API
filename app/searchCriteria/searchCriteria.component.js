"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this
        vm.callApi = function() {
            console.log(Api.getDiscoveryData("48226"))
        }
        vm.callApi()
    }]
}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)