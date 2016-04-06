var userControl = require('./userControl')
var auth = userControl.requireAuth;
module.exports = function (app, passport) {
	app.route('/users')
			.post(userControl.createUser)
		//.get()
	app.route('users/:id')
			.get(userControl.requireAuth, userControl.getUser)
}
