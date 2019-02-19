"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this
        vm.callApi = function() {
            Api.getDate(vm.searchCriteria.startDate, vm.searchCriteria.endDate)
            console.log(Api.getDiscoveryData())
        }
        vm.showFilter = false
        vm.hideSection = function() {
           vm.showFilter = !vm.showFilter
        }
        vm.$onInit = function () {
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