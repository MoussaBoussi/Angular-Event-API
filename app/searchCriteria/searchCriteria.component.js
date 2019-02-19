"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this
        vm.callApi = function() {
            console.log(Api.getDiscoveryData("48226"))
        }
        vm.callApi()
        vm.showFilter = false
        vm.hideSection = function() {
            vm.showFilter = !vm.showFilter
            console.log("test")

        }
        
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)