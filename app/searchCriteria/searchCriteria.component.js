"use strict"

const searchCriteria = {
    templateUrl: `app/searchCriteria/searchCriteria.html`,
    controller: ["Api",function(Api){
        const vm = this;
        vm.setSearchCriteria = function(searchCriteria) {

            vm.searchCriteria.city = vm.locationData.input 

            // if date exists then >> //else default date
            Api.getDate(vm.searchCriteria.startDate, vm.searchCriteria.endDate)

// check this change from searchCriteria to vm.searchCriteria
            vm.searchCriteria.state = vm.locationData.state
            Api.search(vm.searchCriteria)
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
        vm.goToFavorites = function () {
            Api.goToFavorites();
        }
    }]

}

angular
    .module("App")
    .component("searchCriteria", searchCriteria)