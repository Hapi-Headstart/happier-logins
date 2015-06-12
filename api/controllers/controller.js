var Bell = require('bell');
var Path = require('path');
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

	logingoogle: {
		 auth: {
			strategy: 'google'
		 },
		 handler: function (request, reply) {
			if (request.auth.isAuthenticated) {

				var gPlus = request.auth.credentials;
				var profile = {
					username 	: gPlus.profile.displayName,
					email 		: gPlus.profile.email,
					picture 	: gPlus.profile.raw.picture,
					hasAccount	: false,
					isAdmin		: false,
					isDesigner	: false
				};

				// NB. We are assuming user.username will be set to profile.username
				 users.getUser(profile.username, function(err, user){
					if (err) console.log(err);

					if (user) profile.hasAccount = true;
					if (user) {
						if (user.isAdmin) profile.isAdmin = true;
					}
					if (user) {
						if (user.isDesigner) profile.isDesigner = true;
					}

					request.auth.session.clear();
					request.auth.session.set(profile);

					return profile.hasAccount ? reply.redirect('/') : reply.redirect('/signup');
				 });
			}
			else {
				return reply.redirect('/');
			}
		}
	},

	loginfacebook: {
		auth: {
			strategy: 'facebook'
		 },
		 handler: function (request, reply) {
			if (request.auth.isAuthenticated) {

				var gPlus = request.auth.credentials;
				var profile = {
					username 	: fBook.profile.displayName,
					email 		: fBook.profile.email,
					picture 	: fBook.profile.raw.picture,
					hasAccount	: false,
					isAdmin		: false,
					isDesigner	: false
				};

				// NB. We are assuming user.username will be set to profile.username
				 users.getUser(profile.username, function(err, user){
					if (err) console.log(err);

					if (user) profile.hasAccount = true;
					if (user) {
						if (user.isAdmin) profile.isAdmin = true;
					}
					if (user) {
						if (user.isDesigner) profile.isDesigner = true;
					}

					request.auth.session.clear();
					request.auth.session.set(profile);

					return profile.hasAccount ? reply.redirect('/') : reply.redirect('/signup');
				 });
			}
			else {
				return reply.redirect('/');
			}
		}
	},

};