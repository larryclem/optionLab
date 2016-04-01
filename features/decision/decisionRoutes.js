var ctrl = require('./decisionControl')

module.exports = function (app) {
	app.route('/decisions')
			.post(decisionControl.createDecision)
	app.route('decision/:id')
			.get(decisionControl.getDecision)
      .put(decisionControl.editDecision)
      .delete(decisionControl.deleteDecision)
}
