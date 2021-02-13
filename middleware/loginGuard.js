const guard = (req, res, next) => {
	console.log(req.url, req.method)
	if((req.url == '/login' && req.method == 'GET') || req.session.username == '' || req.session.username == undefined){
		if(req.url == '/login' && req.method == 'POST'){
			next()
		}else{
			res.status(400).render('admin/login.html');
		}
	}else{
		if(req.url == '/login/' && req.method == 'GET' && req.session.username){
			res.status(200).redirect('http://localhost:8084/admin/manager');
		}else{
			next();
		}
	}
};

module.exports = guard;