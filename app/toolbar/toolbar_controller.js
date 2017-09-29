(function() {
        'use strict';
        angular.module('angular-inbox', )
            .controller('toolbarController', toolbarController)

        function toolbarController() {
            const vm = this;
            vm.$onInit = function() {

            vm.formcontrol = function(form) {
              form = vm.formshow.showvalue;
              vm.formshow.showvalue = !vm.formshow.showvalue;
            }
            vm.allSelected = function(messages) {
              if (messages !== undefined) {
                return status = messages.every(function(data) {
                  return data.selected == true;
                })
              }
            }
            vm.someSelected = function(messages) {
              if (messages !== undefined) {
                const someMsgs = messages.some(function(data) {
                  return data.selected == true;
                })
                const allMsgs = messages.every(function(data) {
                  return data.selected == true;
                })
                return someMsgs && !allMsgs;
              }
            }
            vm.allNotSelected = function(messages) {
              if (messages !== undefined) {
                return status = messages.every(function(data) {
                  return data.selected !== true;
                })
              }
            }
          }
          vm.markAsRead = function(messages) {
            let arrayOfIds = [];
            if (messages !== undefined) {
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].selected) {
                  messages[i].read = true;
                  arrayOfIds.push(messages[i].id)
                  let body = {
                    messageIds: arrayOfIds,
                    command: 'read',
                    read: true
                  };
                  $http.patch(url, JSON.stringify(body))
                    .then(function(response) {});
                }
              }
            }
          }
          vm.markAsUnRead = function(messages) {
            let arrayOfIds = [];
            if (messages !== undefined) {
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].selected) {
                  messages[i].read = false;
                  arrayOfIds.push(messages[i].id)
                  let body = {
                    messageIds: arrayOfIds,
                    command: 'read',
                    read: false
                  };
                  $http.patch(url, JSON.stringify(body))
                    .then(function(response) {});
                }
              }
            }
          }
          vm.addLabel = function(messages, label) {
            let arrayOfIds = [];
            if (messages !== undefined) {
              for (let i = 0; i < messages.length; i++) {
                let labelExist = messages[i].labels.includes(label);
                if (messages[i].selected && !labelExist) {
                  messages[i].labels.push(label);
                  arrayOfIds.push(messages[i].id)
                }
              }
              let body = {
                messageIds: arrayOfIds,
                command: 'addLabel',
                label: label
              };
              $http.patch(url, JSON.stringify(body))
                .then(function(response) {});
            }
          }
          vm.removeLabel = function(messages, label) {
            let arrayOfIds = [];
            if (messages !== undefined) {
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].selected) {
                  let index = messages[i].labels.indexOf(label);
                  if (index > -1) {

                    arrayOfIds.push(messages[i].id)
                    messages[i].labels.splice(index, 1);
                  }
                }
              }
              let body = {
                messageIds: arrayOfIds,
                command: 'removeLabel',
                label: label
              };
              $http.patch(url, JSON.stringify(body))
                .then(function(response) {});
            }
          }
          vm.changeSelect = function(messages) {
            if (messages !== undefined) {
              if (vm.allSelected(messages)) {
                for (let i = 0; i < messages.length; i++) {
                  messages[i].selected = false;
                }
              } else if (vm.someSelected(messages)) {
                for (let i = 0; i < messages.length; i++) {
                  messages[i].selected = true;
                }
              } else if (vm.allNotSelected(messages)) {
                for (let i = 0; i < messages.length; i++) {
                  messages[i].selected = true;
                }
              }
            }
          }
          vm.countUnreadMessages = function(messages) {
            if (messages !== undefined) {
              let count = 0;
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].read == false) {
                  count++;
                }
              }
              return count;
            }
          }
          vm.deleteMessage = function(messages) {
            let arrayOfIds = [];
            if (messages !== undefined) {
              for (let i = 0; i < messages.length; i++) {
                if (messages[i].selected) {
                  arrayOfIds.push(messages[i].id)
                  let body = {
                    messageIds: arrayOfIds,
                    command: 'delete'
                  };
                  $http.patch(url, JSON.stringify(body))
                    .then(function(response) {});
                  messages.splice(i, 1);
                  i--;
                }
              }
            }
          }
        }

}());
