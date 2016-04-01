var ctrl = require('./userControl')

module.exports = function (app) {
	app.route('/users')
			.post(userControl.createUser)
	app.route('user/:id')
			.get(userControl.getUser)
}
