(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuCategoriesController', MenuCategoriesController);



MenuCategoriesController.$inject = ['categories']; // ['categories'] is from routes - links service to controller, service in routes under 'resolve'
function MenuCategoriesController(categories) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categories;
  
  
}

})();
