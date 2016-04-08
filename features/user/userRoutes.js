var userControl = require('./userControl')

module.exports = function (app, passport) {
	app.route('/signup')
			.post(userControl.createUser)
		//.get()
	app.route('/user/:id')
			.get(userControl.isLoggedIn, userControl.getUser)

	app.route('/login')
			.post(userControl.loginUser)

	app.route('/logout')
			.get(userControl.logoutUser)




	// unused passport routes
	// app.post('/login',
	// 		passport.authenticate('local-login', {
	// 		  successRedirect: '/dashboard',
	// 		  failureRedirect: '/login',
	// 		  failureFlash: true,
	// 		  successFlash: 'Welcome!'
	// 		  })
	// 		);
	//
	// app.post('/signup',
	// 		passport.authenticate('local-signup', {
	// 		  successRedirect: '/dashboard',
	// 		  failureRedirect: '/signup',
	// 		  failureFlash: true,
	// 		  successFlash: 'Welcome!'
	// 		}), function (req, res)
	// 		);
}
