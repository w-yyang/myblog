// const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	// let articleList = null;
	// articleList = await Article.find().then(result => result);
	res.render('admin/admin.html', {
		// article: articleList,
		username: req.session.username
	});
	// res.render('admin/manager.html', {
	// 	article: articleList,
	// 	username: req.session.username
	// });
};