const {Article} = require('../../model/article');

module.exports = async (req, res) => {
	let callBackList = null;
	let articleList = await Article.find().then(result => {
		callBackList = result;
	});
	let backList = [];
	for(let i = 0;i < callBackList.length;i++){
		backList.push({
			_id: callBackList[i]._id, 
			title: callBackList[i].title
		});
	}
	res.send(backList);
};