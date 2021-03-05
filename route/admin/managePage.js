const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	let articleList = null;
	articleList = await Article.find().then(result => result);
	res.render('admin/component/manager.html', {
		article: articleList,
	});
};