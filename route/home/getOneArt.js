const {Article} = require('../../model/article');

module.exports = async (req, res) => {
	let {search} = req.query;
	let backArt = null;
	let back = await Article.findOne({title: search}).then(result => {
		backArt = result;
	});
	res.send(backArt);
};

