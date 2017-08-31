(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('toolbarController', toolbarController)

        function toolbarController() {
            const vm = this;
            vm.$onInit = function() {
                console.log(vm)
            }
            vm.allSelected = function(messages) {
                return status = messages.every(function(data) {
                    return data.selected == true
                })
            }
            vm.someSelected = function(messages) {
                return status = messages.every(function(data) {
                    return data.selected == false
                })
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