const mongoose = require('mongoose');

const {Adminuser} = require('./superuser.js');

mongoose.connect('mongodb://localhost/myserver')
	.then(() => console.log('connected success'))
	.catch(err => console.log('数据库连接报错：', err));
