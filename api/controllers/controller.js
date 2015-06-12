var Bell = require('bell');
var Config = require('../config');

module.exports = {

	serveFile: {
		auth: false,
		handler: {
			directory: {
				path: '../public'
			}
		}
	},

	home: {
		handler: function(request, reply) {
			reply.view('home');
		}
	},

	login: {
		handler: function(request, reply) {
			reply('login');
		}
	},

	signup: {
		handler: function(request, reply) {
			reply('signup');
		}
	}

};