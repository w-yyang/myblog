const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	res.render('admin/component/artupdate.html', {
		username: req.session.username
	});
};