(function () {
"use strict";
	
angular.module('public')
.controller('RegistrationController', RegistrationController);	

RegistrationController.$inject = ['MenuService'];
  function RegistrationController (MenuService) {
    var  regCtrl = this;
    
       	
    regCtrl.submit = function () {
		
		regCtrl.message= "";
				
		MenuService.getFavoriteItem(regCtrl.searchTerm).
		then(function (response) {
			if (response) {
				
				MenuService.saveMyInfo (
				regCtrl.firstname,
				regCtrl.lastname,
				regCtrl.email,
				regCtrl.phone,
				regCtrl.searchTerm
				);
				
				
				regCtrl.message= "Your information has been saved";
				
				console.log (MenuService.getFavoriteItem(regCtrl.searchTerm));
			} else {
				regCtrl.message= "No such menu number exists, try again";
				
			};
			
			
		});
	
      }

    }

  })();
