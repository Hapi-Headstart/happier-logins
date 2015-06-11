var server = require('./api/server');
var config = require('./api/config');

server.start(function (){
	console.log('Server is running at ', server.info.uri);
});