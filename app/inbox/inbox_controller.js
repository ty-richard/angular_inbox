(function() {
    'use strict';
    angular.module('angular-inbox', )
        .controller('inboxController', inboxController)

    function inboxController() {
        const vm = this;
        vm.$onInit = function() {
            const data = angular.fromJson(json);
            vm.messages = data;
            console.log(data)
        }
    }
}());