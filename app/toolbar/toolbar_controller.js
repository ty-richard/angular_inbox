(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('toolbarController', toolbarController)

        function toolbarController() {
            const vm = this;
            vm.$onInit = function() {
                console.log(vm)
            }
            vm.toggleAll = function(messages) {
                for (var i = 0; i < messages.length; i++) {
                    messages[i].selected = true
                }
            }
        }
    }
    ()
);