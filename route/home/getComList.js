const {Comment} = require('../../model/comment');

module.exports = async (req, res) => {
	let resBackList = null;
	let commentList = await Comment.find({}, null, {limit: 6}).then(result => {
		resBackList = result;
	});
	res.send(resBackList);
};