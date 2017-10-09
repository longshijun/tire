var app = angular.module('app', []);
app.controller('myController', ['$scope','$timeout', function($scope, $timeout){
    $scope.tabPage = 'home';
    $scope.productType = 'common';
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:false,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 3000
    });
}]);


app.run(['$rootScope', function($rootScope){
    var  browserRedirect = function() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return false;
        } else {
            return true;
        }
    }
    $rootScope.isPC = browserRedirect();
}])
app.directive('swiper', [function(){
    return {
        restrict:'CAE',
        link:function(scope, element){
            var swiper = new Swiper(element[0], {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop:false,
                grabCursor: true,
                paginationClickable: true,
                autoplay: 3000
            });
        }
    }
}])

app.directive('home', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/home.html'
    }
}]);
app.directive('customer', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/customer-see.html'
    }
}]);
app.directive('product', [function(){
    return {
        restrict:'ACE',
        scope:{
            productType:'='
        },
        templateUrl:'js/module/product-show.html',
        controller:['$scope', function($scope){
            $scope.back = function(){
                $scope.productType = 'common';
            }
        }]
    }
}]);
app.directive('productFlow', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/product-flow.html'
    }
}]);
app.directive('honor', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/honor.html'
    }
}]);

app.directive('advantage', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/advantage.html'
    }
}]);

app.directive('contact', [function(){
    return {
        restrict:'ACE',
        templateUrl:'js/module/contact.html'
    }
}]);