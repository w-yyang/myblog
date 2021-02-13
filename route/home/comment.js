const {Comment} = require('../../model/comment');

module.exports = async (req, res) => {
	let {name, comment} = req.body;
	const commentMsg = new Comment({
								name: name,
								commentStr: comment
						   });
	commentMsg.save(function(msg){
		// console.log(msg);
	});
	res.send('成功接收');
};