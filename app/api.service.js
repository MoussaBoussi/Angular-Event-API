"use strict"

function Api($http, $location) {
    const self = this
    self.zipCode = null
    self.searchCriteria = {
        keyword: "",
        city: "",
        state: "",
        zip: "",
        radius: "",
        startDate: "",
        endDate: ""
    }
    self.getDate = function(start, end){
        let datestart = new Date ()
        let dateend = new Date ()
        
        let str = datestart.toISOString();
        let startDate = str.split("").splice(0, str.length - 5).join("");
        let str1 = dateend.toISOString();
        let endDate = str1.split("").splice(0, str1.length - 5).join("");
        self.searchCriteria.startDate = startDate
        self.searchCriteria.endDate = endDate
    }
    self.search = function(searchCriteria) {
        searchCriteria.keyword = self.searchCriteria.keyword
        searchCriteria.range = self.searchCriteria.radius
        searchCriteria.startDate = self.searchCriteria.startDate
        searchCriteria.endDate = self.searchCriteria.endDate
        searchCriteria.city = self.searchCriteria.city
        searchCriteria.zip = self.searchCriteria.zip
        searchCriteria.state = self.searchCriteria.state
        self.getDiscoveryData()
    }
    self.getDiscoveryData = function () {
        return $http({
            url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Aewipo0eUXUKyoLGwI5sgqOUpDz7m454&keyword=rap&city=${self.searchCriteria.city}&stateCode=${self.searchCriteria.state}&postalCode=${self.searchCriteria.zip}&unit=miles&radius=${self.searchCriteria.radius}&startDateTime=${self.searchCriteria.startDate}Z&endDateTime=${self.searchCriteria.endDate}Z`,
            method: "GET"
        }) .then(function(response) {
            self.data = response
            return self.data
        })
    }

    self.setlocationCriteria= function(object) {
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