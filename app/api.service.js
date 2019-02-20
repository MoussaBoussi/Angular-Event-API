"use strict"

function Api($http, $location) {
    const self = this
    self.zipCode = null
    self.searchCriteria = {
        keyword: "",
        city: "",
        state: "",
        radius: "",
        startDate: "",
        endDate: ""
    }
    self.getDate = function(start, end){
        console.log(start)

        let str = start.toISOString();
        let startDate = str.split("").splice(0, str.length - 5).join("");
        let str1 = end.toISOString();
        let endDate = str1.split("").splice(0, str1.length - 5).join("");
        self.searchCriteria.startDate = startDate
        self.searchCriteria.endDate = endDate
    }
    self.search = function(searchCriteria) {
        
        self.searchCriteria.keyword = searchCriteria.keyword
        self.searchCriteria.radius = searchCriteria.range
        self.searchCriteria.city = searchCriteria.city
        self.searchCriteria.zip = searchCriteria.zip
        self.searchCriteria.state = searchCriteria.state
        console.log(self.searchCriteria)
        self.getDiscoveryData()
    }

    // &startDateTime=${self.searchCriteria.startDate}Z&endDateTime=${self.searchCriteria.endDate}Z
    self.getDiscoveryData = function () {
        return $http({
            url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Aewipo0eUXUKyoLGwI5sgqOUpDz7m454&keyword=${self.searchCriteria.keyword}&city=${self.searchCriteria.city}%stateCode=${self.searchCriteria.state}&radius=${self.searchCriteria.radius}&unit=miles&startDateTime=${self.searchCriteria.startDate}Z`,
            method: "GET"
        }) .then(function(response) {
            self.data = response
            console.log(response)
            return self.data
        })
    }

    self.setlocationCriteria= function(object) {
        // if else statement here for zip 
        self.locationData = object;
        // Check if location Data is number or string TODO !!!!
        $location.path("/search");
    }

    self.getlocationCriteria = function(){
        return self.locationData;
    }
}



angular
    .module("App")
    .service("Api", Api)