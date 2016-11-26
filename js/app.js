'use strict';

/* App Module */

var myApp = angular.module('myApp', [
    'ui.router', // for state prrovider
    'ui.bootstrap',
    'dashboardController',
    'ngStorage',
    'ngTouch',
    'ngAnimate',
    'ngResource',
]);

myApp.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'public/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
           

       
        $urlRouterProvider.otherwise('dashboard');
    }
]);

myApp.$inject = ['$scope'];


myApp.constant('Constants', {

});
