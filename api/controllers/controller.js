var Bell = require('bell');
var Config = require('../config');

module.exports = {

	home: {
		handler: function(request, reply) {
			reply.view('home');
		}
	}

};