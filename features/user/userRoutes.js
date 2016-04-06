var userControl = require('./userControl')

module.exports = function (app, passport) {
	app.route('/users')
			.post(userControl.createUser)
		//.get()
	app.route('users/:id')
			.get(userControl.getUser)
}
