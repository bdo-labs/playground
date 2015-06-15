'use strict';

var placeholder = angular.module('placeholder', []);

placeholder.controller('PlaceholderController', ['$http', PlaceholderController]);

var URL = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=summer,landscape&tagmode=all&format=json';

function PlaceholderController($http) {
  this.images = [];
  this.http = $http;
  this.activate();
}

PlaceholderController.prototype.activate = function() {
  var self = this;
  window.jsonFlickrFeed = function(result) {
    self.images = result.items;
  };
  this.http.jsonp(URL);
};

module.exports = placeholder;

