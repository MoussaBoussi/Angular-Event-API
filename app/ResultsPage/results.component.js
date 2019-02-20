"use strict";




const resultsPage = {
    templateUrl: `app/ResultsPage/results.html`,
    controller: ["Api", function(Api){
        const vm = this;
        vm.eventData = Api.getJSON();                   //event data property equal to Api service and event data getter
        vm.events = vm.eventData.data._embedded.events;
        // event property to the embedded events in console
        // vm.saveFav = (event) => {
        //     Api.setFav(event);
        // };
       vm.noResultsFound = () => {              // fail safe 
            if(vm.events.length < 1){
                return true;
            } else {
                return false;
            }
        };
        
    }]
}




angular
.module("App")
.component("resultsPage", resultsPage);