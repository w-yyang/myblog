const {Adminuser} = require('../../model/superuser');

module.exports = async (req, res) => {
	const {username, password} = req.body;
	if(username.trim().length == 0 || password.trim().length == 0){
		res.status(400).render('admin/login.html',{ msg: '用户名或密码错误' });
	}
	let user = await Adminuser.findOne({username: username});
	if(user.password == password){
		req.session.username = username;
		res.status(200).redirect('manager');//后台路由路径补上
		res.json({
			status: "success"
		});
	}else{
		res.status(400).render('admin/login.html', {msg: '登录错误'});
		res.json({
			status: "failed"
		});
	}
};