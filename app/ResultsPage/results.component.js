"use strict";

const resultsPage = {
    templateUrl: `app/ResultsPage/results.html`,
    controller: ["Api", function(Api){
        const vm = this;

        vm.$onInit = function() {
            vm.eventData = Api.getJSON();          
            vm.events = vm.eventData.data._embedded.events;
        }
        // event property to the embedded events in console
        
       vm.noResultsFound = () => {              // fail safe 
            if(vm.events.length < 1){
                return true;
            } else {
                return false;
            }
        };
        vm.favoriteItem = function(event) {
            Api.checkFavorites(event)
        }
        vm.goToFavorites = function () {
            Api.goToFavorites()
        }

        vm.moreDetails = function (event) {
            console.log("works")
            Api.setMoreDetails(event)
        }
    }]
}




angular
.module("App")
.component("resultsPage", resultsPage);