(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home Page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Menu Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/route-categories.template.html',
    controller: 'MenuCategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
        
      }]
    }
  })
  
  
  // Menu Items
  .state('items', {
   url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/route-items.template.html',
    controller: 'MenuItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
       
      }]
    }
  });
  
  
  
  
}

})();
