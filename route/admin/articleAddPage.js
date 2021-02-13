const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	res.render('admin/artadd.html', {
		username: req.session.username
	});
};