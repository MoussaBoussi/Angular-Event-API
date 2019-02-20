"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this;
        vm.setSearchCriteria = function(searchCriteria) {

            searchCriteria.city = vm.locationData.input 
            // if date exists then >> //else default date
            Api.getDate(vm.searchCriteria.startDate, vm.searchCriteria.endDate)

            searchCriteria.state = vm.locationData.state
            Api.search(searchCriteria)
        }
        vm.showFilter = false
        vm.hideSection = function() {
            console.log("Hello")
            vm.showFilter = !vm.showFilter
        }
        vm.$onInit = function () {
            vm.locationData = Api.getlocationCriteria();
            console.log(vm.locationData) //gets passed to locationData
        }
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)