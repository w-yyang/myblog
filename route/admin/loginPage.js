module.exports = (req, res) => {
	var msg = '';
	res.render('admin/login.html', {msg: msg});
};