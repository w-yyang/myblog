const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	let searchCon = null;
	let articleList = await Article.find().then(result => {
		searchCon = result;
	});
	for(let i = 0;i < searchCon.length;i++){
		searchCon[i].date = searchCon[i].date.toString().slice(0, 12);
	}
	res.render('admin/artlist.html',{
		searchCon: searchCon,
		username: req.session.username
	});
};