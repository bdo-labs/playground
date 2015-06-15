
var koa = require('koa')();
var serve = require('koa-static');
var bundle = require('www-bundle');
var fs = require('fs');
var join = require('path').join;
var src = join(__dirname, 'src');

// Resource bundling.

koa.use(bundle({ root: src }));
bundle('angular-material.css');
bundle('main.js');
bundle('main.css');
koa.use(serve(src));

koa.listen(8081, function() {
  var addr = this.address();
  console.log('listening on [%s]:%s', addr.address, addr.port);
});

