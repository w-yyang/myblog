const {Article} = require('../../model/article');

module.exports = async (req, res) => {
	// let {page} = req.query;
	let backAll = null;
	let back = await Article.find().then(result => {
		backAll = result;
	});
	res.send(backAll);
};