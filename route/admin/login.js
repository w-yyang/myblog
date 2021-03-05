const {Adminuser} = require('../../model/superuser');

module.exports = async (req, res) => {
	const {username, password} = req.body;
	var msg = '';
	if(username.trim().length == 0 || password.trim().length == 0){
		res.status(200).render('admin/login.html',{ msg: msg });
	}
	let user = await Adminuser.findOne({username: username});
	if(user == null){
		msg = '信息错误';
		res.status(200).render('admin/login.html', {msg: msg});
	}else{
		if(user.password == password){
			req.session.username = username;
			res.status(200).redirect('manager');//后台路由路径补上
		}else{
			msg = '信息错误';
			res.status(200).render('admin/login.html', {msg: msg});
		}
	}
};