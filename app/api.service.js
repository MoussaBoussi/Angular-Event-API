"use strict"

function Api($http, $location) {
    const self = this
    self.zipCode = null
    self.getDiscoveryData = function (zip) {
        console.log(zip)
        return $http({
            url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=Aewipo0eUXUKyoLGwI5sgqOUpDz7m454&keyword=music&postalCode=${zip}&post`,
            method: "GET"
        }) .then(function(response) {
            self.data = response
            return self.data
        })
    }

    self.setlocationCriteria= function(object) {
        self.object = object;
        $location.path("/search");
        self.data = self.getDiscoveryData(object);

    self.getlocationCriteria = function(){
        return self.object;
        return self.data
    }
}
}


angular
    .module("App")
    .service("Api", Api)