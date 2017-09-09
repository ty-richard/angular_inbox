(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('messagesController', messagesController)

        function messagesController($http) {
            const vm = this;

            vm.toggleStar = function(messages) {
                const url = "https://salty-inlet-68026.herokuapp.com/api"
                var body = {
                    messageIds: [messages.id],
                    command: "star",
                    star: !messages.starred
                }
                $http.patch(url + "/messages", JSON.stringify(body)).then(function(res) {
                    messages.starred = !messages.starred
                })

            };
            vm.checkedMessage = function(selected, messages) {
                messages.selected = selected
            };
        }
    }
    ());