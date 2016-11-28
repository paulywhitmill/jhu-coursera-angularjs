(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://paulywhitmill.herokuapp.com')
.config(config)
.config(['$sceProvider',function($sceProvider){
    $sceProvider.enabled(false);
}]);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
