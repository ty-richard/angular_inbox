(function() {
    'use strict';
    angular.module('angular-inbox', )
        .component('messages', {
            controller: 'messagesController',
            templateUrl: 'app/messages/messages_template.html'
        })
}());