
var resource = angular.module('resource', []);

resource.controller('ResourceController', [ResourceController]);

function ResourceController(){
    this.name = 'alone';
}

module.exports = resource;
