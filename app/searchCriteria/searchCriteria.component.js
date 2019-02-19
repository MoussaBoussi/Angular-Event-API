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
            console.log("test")
            vm.showFilter = !vm.showFilter
            Api.getlocationCriteria();
        }
    vm.sendInfo = function(){
           vm.data = Api.getlocationCriteria(object);
           console.log(vm.data);
            }
    

        
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)