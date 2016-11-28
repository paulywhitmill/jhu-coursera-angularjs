(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
   var service = this;
   var favoriteitem = {};
   var myinfo = {};
 
  

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };





 service.getFavoriteItem = function (searchTerm) {
	 
	 searchTerm = searchTerm.toUpperCase();
	 
	 	
	   return $http({
		  method: "GET",
		  url: (ApiPath + '/menu_items/' + searchTerm + '.json')
	  }).then (function success(response) {
		   console.log("getFavoriteItem: response returned to RegistrationController");
		   favoriteitem = response.data;
		   return true;
		   
	  },
	  function error (response) {
		  console.log("getFavoriteItem: response not returned to RegistrationController");
		  return false;   
		
	  });
	  
	  
  };
  
  service.saveMyInfo = function (firstname, lastname, email, phone, searchTerm) {
	  
	  
	 myinfo[0] = firstname;
	 myinfo[1] = lastname;
	 myinfo[2] = email;
	 myinfo[3] = phone;
	 myinfo[4] = searchTerm.toUpperCase();
	 myinfo[5] = ApiPath + "/images/" + searchTerm.toUpperCase() + ".jpg";
	 
	 	  
  };
  
  service.getMyInfo = function () {
	  console.log("MenuService.getMyInfo:",myinfo);
	  return myinfo;
  };
  
  
  
  service.getMyFavoriteItem = function () {
	  console.log("MenuService.getMyFavoriteItem:",favoriteitem)
	  return favoriteitem;
  };
  
  
  
 }

})();
