
(function () { //IIFE
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems' , FoundItemsDirective)
  .constant('ApiBasePath' , "https://davids-restaurant.herokuapp.com");

// ..............................DIRECTIVES....................................

  function FoundItemsDirective() {
	  var ddo = {
		  templateUrl: 'foundItems.html',
		  scope: {
        found: '<', // array of 'found' menu items, one-way binding within isolate scope
        onRemove: '&' // function reference binding to parent controller (NarrowItDownController) to remove item from found array
      }//........scope
    }; //.......ddo

    return ddo;
} //.....function FoundItemsDirective

//....................................CONTROLLERS.................................

  NarrowItDownController.$inject = ['MenuSearchService']; // inject service into controller
  function NarrowItDownController(MenuSearchService) {
    var  nidCtrl = this;

    nidCtrl.searchTerm = ""; // initialize 'searchTerm'
    nidCtrl.found = []; // initialize 'found' array
    nidCtrl.message = ""; // initialize 'message'

    nidCtrl.search = function () {


      if (nidCtrl.searchTerm === "") {
        nidCtrl.found = [];
        nidCtrl.message = "Nothing found";

      } else {

        var promise = MenuSearchService.getMatchedMenuItems(nidCtrl.searchTerm);
        promise.then(function (response)  {
          nidCtrl.found = response;


          if (nidCtrl.found.length === 0) {
            nidCtrl.message = "Nothing found";


          } else {nidCtrl.message = "";}//....if

        })//.....then function
        .catch (function(error) {
          console.log(error);

        })//...catch


      }//....else

    }//......nidCtrl search function

    nidCtrl.onRemove = function(index) {
      nidCtrl.found.splice(index, 1);

    }//.... function onRemove



  }//......function NarrowItDownController


  //.................SERVICES..............................................................

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function(result) { //    'then' function returns a promise

        var items = result.data.menu_items;

        var foundItems = [];

        for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >=0) {
            foundItems.push(items[i]);



          }//.....if


        };// .....for
        console.log(foundItems);
        return foundItems; // dectected by controller as  'response' i.e promise returned
      });//.....function(result)


    }//.....service.getMatchedMenuItems

  }//......function MenuSearchService











})();//IIFE
