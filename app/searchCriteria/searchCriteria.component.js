"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this
        vm.callApi = function() {
            Api.getDate(vm.searchCriteria.startDate, vm.searchCriteria.endDate)
            console.log(Api.getDiscoveryData())
        }
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)