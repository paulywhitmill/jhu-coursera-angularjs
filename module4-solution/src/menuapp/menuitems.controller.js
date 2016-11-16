(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);



MenuItemsController.$inject = ['items']; // ['items'] is from routes - links service to controller, service in routes under 'resolve'
function MenuItemsController(items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
   
}

})();
