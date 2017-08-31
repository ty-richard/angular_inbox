(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('messagesController', messagesController)

        function messagesController() {
            const vm = this;
            vm.toggleStar = function(messages) {
                messages.starred = !messages.starred
            };
            vm.checkedMessage = function(selected, messages) {
                messages.selected = selected
                console.log(messages)
            };
        }
    }
    ());