module.exports = (req, res) => {
	req.session.username = undefined;
	res.status(200).redirect('http://localhost:8084/admin/login');
}