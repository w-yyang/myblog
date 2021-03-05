const {Comment} = require('../../model/comment');

module.exports = async (req, res) => {
	let resBackList = null;
	let commentList = await Comment.find().sort({_id: -1}).limit(8).then(result => {
		resBackList = result;
	});
	res.send(resBackList);
};