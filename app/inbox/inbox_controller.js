(function() {
    'use strict';
    angular.module('angular-inbox', )
        .controller('inboxController', inboxController)

    function inboxController($http) {
        const vm = this;
        vm.$onInit = function() {
            const url = "https://salty-inlet-68026.herokuapp.com/api"
            $http.get(url + "/messages").then(function(messages) {
                vm.messages = messages.data._embedded.messages
                console.log(messages.data._embedded.messages)
            })
        }
    }
}());