(function() {
    'use strict';
    angular.module('angular-inbox', )
        .component('toolbar', {
            controller: 'toolbarController',
            templateUrl: 'app/toolbar/toolbar_template.html',
            bindings: {
                databar: '<'
            }
        })
}());