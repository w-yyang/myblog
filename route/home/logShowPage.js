const {Article} = require('../../model/article');

module.exports = async (req, res) => {
	let firstCon = null;
	let {_id} = req.query;
	const baseUrl = 'http://localhost:8084';
	if(_id == undefined){
		let articleList = await Article.findOne().then(result => {
			firstCon = result;
		});
		if(firstCon.imgurl != ''){
			firstCon.imgurl = baseUrl + firstCon.imgurl
		}
		res.render('home/logshow.html', {firstCon: firstCon});
	}else{
		let articleList = await Article.findOne({_id: _id}).then(result => {
			firstCon = result;
		});
		if(firstCon.imgurl != ''){
			firstCon.imgurl = baseUrl + firstCon.imgurl
		}
		// console.log(firstCon);
		res.render('home/component/contenttpl.html', {firstCon: firstCon});
	}
};

