var Hapi = require('hapi');
var Bell = require('bell');
var Cookie = require('hapi-auth-cookie');
var Path = require('path');

var Routes = require('./routes/routes');
var Config = require('./config');

var server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, '../public')
			}
		}
	}
});

server.connection({ host: 'localhost', port:8080});

server.register([Bell, Cookie], function(err) {

	server.views({
		engines: {
			jade: require("jade")
		},
		compileOptions: {
			pretty: true
		},
		relativeTo: __dirname,
		path: './views',
		isCached: false
	});

	server.route(Routes);
});

module.exports = server;