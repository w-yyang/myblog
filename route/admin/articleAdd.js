const fs = require('fs');
const path = require('path');
const {Article} = require('../../model/article');

module.exports = async (req, res) => {
	var uploadimg = req.file;
	// console.log(uploadimg);
	let {title, author} = req.body;
	let artcontent = req.body['artcontent'];
	var imgUrl = '';
	if(uploadimg){
		imgUrl = '/uploadimg/' + uploadimg.originalname;
		fs.readFile(uploadimg.path, (err, data) => {
			if(err){
				console.log('错误：', err);
				return;
			}
			fs.writeFile(path.join(__dirname, '../../public/uploadimg/' + uploadimg.originalname), data, (err) => {
				if(err){
					console.log('写入失败');
					return;
				}
			});
		});
	}
	const newArticle = new Article({
								title: title,
								content: artcontent,
								imgurl: imgUrl,
								author: author
							}); 
	newArticle.save();
	res.send({
		msg: 'success'
	});
};