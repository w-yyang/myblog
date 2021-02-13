const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, '请输入网名']
	},
	commentStr: {
		type: String,
		require: [true, '请输入评论']
	}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
	Comment: Comment
};