var path  = require('path');
var connect  = require('connect');
var server = connect();
var static = require('serve-static');

server.use(  static(__dirname));
server.listen(3000);

var livereload = require('livereload');
var lrServer = livereload.createServer();
console.log(path.resolve(__dirname,'./1'))
lrServer.watch([
  __dirname,
  path.resolve(__dirname,'./1')
]);

console.log('open http://localhost:3000')
