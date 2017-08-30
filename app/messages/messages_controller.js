(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('messagesController', messagesController)

        function messagesController() {
            const vm = this;
            vm.$onInit = function() {
                const data = angular.fromJson(json);
                vm.message = data;
            }
        }
    }
    ());