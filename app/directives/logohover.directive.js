"use strict";

// Directives are pretty alright :)

function logohover() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("mouseenter", function(){
                console.log("works")
                var element = document.querySelector('.logoImg');
                var angElement = angular.element(element);
                angElement.addClass('wobble-hor-top')
            })
            $element.on("mouseleave", function(){
                console.log("works")
                var element = document.querySelector('.logoImg');
                var angElement = angular.element(element);
                angElement.removeClass('wobble-hor-top')
            })
        }
    }
}

angular
    .module("App")
    .directive("logohover", logohover)