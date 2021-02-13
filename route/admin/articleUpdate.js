const {Article} = require('../../model/article.js');

module.exports = async (req, res) => {
	let {id, content} = req.body;
	id = JSON.parse(id);
	await Article.findByIdAndUpdate(id, {content: content}, (err, data) => {
		if(err){
			console.log('文章更新失败');
		}
	});
};