
(function () { //IIFE
  'use strict';

  angular.module('ShoppingListCheckOff', [])  // set up app
  .controller('ToBuyController', ToBuyController) //set first controller
  .controller('AlreadyBoughtController', AlreadyBoughtController) // set second controller
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService); //set service - 'links'  controllers

  ToBuyController.$inject = ['ShoppingListCheckOffService']; // inject service into controller
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeToBuyItems(itemIndex);// needs $index in html for this to work

    }; //function - toBuylist.removeItem

  }; // function - ToBuyController(ShoppingListCheckOffService)




  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']; // inject service into controller
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();


  }; // function AlreadyBoughtController(ShoppingListCheckOffService)

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtItems = [];

    var toBuyItems = [
      {name: 'cookies', quantity: 17},
      {name: 'muffins', quantity: 5},
      {name: 'cakes', quantity: 3},
      {name: 'doughnuts', quantity: 6},
      {name: 'pies', quantity: 27}
    ];



    service.getToBuyItems = function () {
      return toBuyItems;
    }; // function - service.getToBuyItems



    service.removeToBuyItems = function (itemIndex) {
      var removedItem = toBuyItems.splice(itemIndex, 1);
      console.log(removedItem[0]);
      boughtItems.push(removedItem[0]);
      console.log(boughtItems);

       
    }; // function - service.removeToBuyItems




    service.getBoughtItems = function () {
      return boughtItems;
    }; // function - service.getBoughtItems




  };// function ShoppingListCheckOffService


})();//IIFE
