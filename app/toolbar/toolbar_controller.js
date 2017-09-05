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
                    let counting = 0;
                    for (var i = 0; i < messages.length; i++) {
                        if (messages[i].selected) {
                            counting++
                        }
                    }
                    if (counting === messages.length) {
                        return true
                    } else {
                        return false
                    }
                })
            }
            vm.someSelected = function(messages) {
                return status = messages.every(function(data) {
                    let counting = 0;
                    for (var i = 0; i < messages.length; i++) {
                        if (messages[i].selected) {
                            counting++
                        }
                    }
                    if (counting < messages.length && counting > 0) {
                        return true
                    } else {
                        return false
                    }
                })
            }
            vm.noneSelected = function(messages) {
                return status = messages.every(function(data) {
                    let counting = 0;
                    for (var i = 0; i < messages.length; i++) {
                        if (messages[i].selected) {
                            counting++
                        }
                    }
                    if (counting === 0) {
                        return true
                    } else {
                        return false
                    }
                })
            }
            vm.toggleAll = function(messages) {
                return status = messages.every(function(data) {
                    let counting = 0;
                    for (var i = 0; i < messages.length; i++) {
                        if (messages[i].selected) {
                            counting++
                        }
                    }
                    if (counting < 8) {
                        for (var i = 0; i < messages.length; i++) {
                            messages[i].selected = true
                        }
                    } else {
                        for (var i = 0; i < messages.length; i++) {
                            messages[i].selected = false
                        }
                    }

                })
            }
            vm.toggleNone = function(messages) {
                for (var i = 0; i < messages.length; i++) {
                    messages[i].selected = false
                    console.log(messages)
                }
            }
            vm.countSelected = function(messages) {
                let counting = 0;
                for (var i = 0; i < messages.length; i++) {
                    if (messages[i].selected) {
                        counting++
                    }
                }
                return counting
            }
            vm.markRead = function(messages) {
                for (var i = 0; i < messages.length; i++) {
                    if (messages[i].selected) {
                        messages[i].read = true
                    } else { messages[i].read = false }
                }
            }
            vm.markUnread = function(messages) {
                for (var i = 0; i < messages.length; i++) {
                    if (messages[i].selected) {
                        messages[i].read = false
                    } else { messages[i].read = true }
                }
            }
        }
    }
    ()
);