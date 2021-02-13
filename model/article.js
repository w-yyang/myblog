const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, '请输入文章标题']
	},
	content: {
		type: String,
		require: [true, '请输入文章内容']
	},
	imgurl: {
		type: String
	},
	author: {
		type: String,
		default: 'wyy'
	},
	date: {
		type: String,
		default: getTime()
	}	
});

function getTime(){
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth() + 1;
	var day = time.getDate();
	return year + '-' + month + '-' + day;
}

const Article = mongoose.model('Article', articleSchema);

module.exports = {
	Article: Article
};