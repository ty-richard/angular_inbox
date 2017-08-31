(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('toolbarController', toolbarController)

        function toolbarController() {
            const vm = this;
            vm.toggleAll = function(message) {
                var toggleStatus = !$scope.isAllSelected;
                angular.forEach($scope.options, function(itm) { itm.selected = toggleStatus; });

            }

            $scope.optionToggled = function() {
                $scope.isAllSelected = $scope.options.every(function(itm) { return itm.selected; })
            }
        }
    }
    ());