const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	let {delid} = req.query;
	let result = await Article.findOneAndDelete({_id: JSON.parse(delid)});
	res.send('删除成功');
};