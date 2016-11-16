(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/component-items.template.html',
  bindings: {
    items: '<'
  }
});

})();
