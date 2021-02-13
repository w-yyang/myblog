const {Article} = require('../../model/article.js');
var {ObjectID} = require('mongodb');

module.exports = async (req, res) => {
	let paramsid = req.query.id;
	paramsid = JSON.parse(paramsid); //成功 为什么
	let backRes = null;
	let resultMsg = null;
	backRes = await Article.findOne({_id: new ObjectID(paramsid)}).then(result => {
		resultMsg = result;
	});
	res.send(resultMsg);
}
