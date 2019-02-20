"use strict"

function Api($http, $location) {
    const self = this;
    self.jsonPayload = null; // set json object to null
    self.zipCode = null;
    self.favoriteList = [];
    
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
            url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Aewipo0eUXUKyoLGwI5sgqOUpDz7m454&keyword=${self.searchCriteria.keyword}&city=${self.searchCriteria.city}&stateCode=${self.searchCriteria.state}&radius=${self.searchCriteria.radius}&unit=miles&startDateTime=${self.searchCriteria.startDate}Z&endDateTime=${self.searchCriteria.endDate}Z`,
            method: "GET"
        }) .then(function(response) {
            self.data = response
            console.log(response)
            return self.data
        }).then((data) => {             // then passing data to the results page- passing data object and returning self.whatever object 
            // console.log(data);
            self.jsonPayload = data;
            $location.path("/results");
            return self.jsonPayload;
        });
    };
    self.getJSON = () => {
        for (let i = 0; i < self.jsonPayload.length; i++) {
            self.jsonPayload[i].favorited = false
            self.jsonPayload[i].id = i
            console.log(self.jsonPayload[i].id)
        }
        return self.jsonPayload;        //getter for self.jsonPayload object data
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

    // favorites
    self.checkFavorites = function(event){
        if (event.favorited){
            event.favorited = false
            console.log("favorited = false")
            self.deleteFavorite(event.id)
        } else {
            event.favorited = true
            console.log("favorited = true")
            self.addFavorite(event)
        }
    }

    self.addFavorite = function(newItem){
        self.favoriteList.push(angular.copy(newItem))
    }
    self.getFavoriteList = function(){
        return self.favoriteList;
    }
    self.goToFavorites = function() {
        $location.path("/favorites");
    }
    self.deleteFavorite = function(item){
        //loop through the favorite
        //look for id 
        //splice the id at that index 

        for (let i = 0; i < self.favoriteList.length; i++) {
            if (self.favoriteList[i].id === item.id) {
                console.log(i + "is a match!")
                self.favoriteList.splice(i, 1);
                item.favorited = false
            } else {
                return;
            }
        }

        return self.favoriteList;
    }

    self.setMoreDetails = function(event) {
        self.moreDetails = event
        $location.path("/details");
    }
    self.getMoreDetails = function() {
        return self.moreDetails;
    }
}




angular
    .module("App")
    .service("Api", Api)