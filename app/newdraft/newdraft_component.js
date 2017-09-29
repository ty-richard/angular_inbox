(function() {
    'use strict';
    angular.module('angular-inbox', )
        .component('newdraft', {
            controller: 'newdraftController',
            templateUrl: 'app/newdraft/newdraft_template.html',
            bindings: {
              formcontents: '<',
              formshow: '<'
            }
        })
}());
