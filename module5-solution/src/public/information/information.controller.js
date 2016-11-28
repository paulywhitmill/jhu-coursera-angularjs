(function () {
"use strict";
	
angular.module('public')
.controller('InformationController', InformationController);	

InformationController.$inject = ['MenuService', '$sce'];
  function InformationController (MenuService, $sce) {
    var  myinfoCtrl = this;
        
   myinfoCtrl.favorite = MenuService.getMyFavoriteItem();
   myinfoCtrl.info = MenuService.getMyInfo();
      
    }

  })();
