(function () {
"use strict";

angular.module('common')
.service('KeyValueService', KeyValueService);



function KeyValueService() {
	var service = this;
	var value = "";
  

  service.getValue = function (obj) {
	  var keys = Object.keys(obj);

		for (var i = 0; i < keys.length; i++) {
			 value = (obj[keys[i]]); 
		};	  
	   return value; 
  };
  

};



})();
