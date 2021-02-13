const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
	username: {
		type: String,
		maxlength: 20,
		minlength: 3,
		required: [true, '请输入用户名']
	},
	password: {
		type: String,
		maxlength: 16,
		minlength: 6,
		required: [true, '请输入密码']
	}
});

const Adminuser = mongoose.model('Adminuser', adminSchema);

module.exports = {
	Adminuser
};