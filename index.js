var path  = require('path');
var connect  = require('connect');
var server = connect();
var static = require('serve-static');

server.use(  static(__dirname));
server.listen(3000);

var livereload = require('livereload');
var lrServer = livereload.createServer();
lrServer.watch([
  __dirname,
  path.resolve(__dirname,'./hand'),
  path.resolve(__dirname,'./blenderscene'),
  path.resolve(__dirname,'./mario_and_luigi_in_space'),
]);

console.log('open http://localhost:3000')
