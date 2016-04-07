var userControl = require('./userControl')

module.exports = function (app, passport) {
	app.route('/users')
			.post(userControl.createUser)
		//.get()
	app.route('/users/:id')
			.get(userControl.requireAuth, userControl.getUser)

	app.post('/login',
			passport.authenticate('local-login', {
			  successRedirect: '/dashboard',
			  failureRedirect: '/login',
			  failureFlash: true,
			  successFlash: 'Welcome!'
			  })
			);

	app.post('/signup',
			passport.authenticate('local-signup', {
			  successRedirect: '/dashboard',
			  failureRedirect: '/signup',
			  failureFlash: true,
			  successFlash: 'Welcome!'
			  })
			);
}
