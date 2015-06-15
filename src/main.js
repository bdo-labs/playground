
'use strict';

require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-material-icons');
require('angular-new-router');
var angular = window.angular;
var resource = require('./components/resource/resource.js');
var resourceService = require('./services/resource/');
var placeholder = require('./components/placeholder/placeholder.js');

var app = angular.module('playground', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngNewRouter',
    'ngMdIcons',
    resourceService.name,
    resource.name,
    placeholder.name
]);

app.controller('MainController', ['$router', '$mdSidenav', MainController]);

app.factory('SomeData', ['Resource', function($resource){
    var url = '/api/somedata/:data_id';
    return $resource(url, {data_id: '@id'});
}]);

function MainController($router, $mdSidenav){
    this.$mdSidenav = $mdSidenav;
    $router.config([
        {path: '/', component: 'resource'},
        {path: '/placeholder', component: 'placeholder'}
    ]);
}

MainController.prototype.toggleNavigation = function() {
    this.$mdSidenav('left').toggle();
}
