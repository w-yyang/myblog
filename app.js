const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const home = require('./route/home');
const admin = require('./route/admin');

require('./model/connect');

app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
	secret: 'secret key',
	saveUninitialized: false,
	cookie: {
		maxAge: 60 * 60 * 1000 * 24
	},
	rolling: true
}));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('express-art-template'));
app.set('views engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/home', home);
app.use('/admin', require('./middleware/loginGuard'));
app.use('/admin', admin);

app.use(function(req, res){
	res.render('404.html');
});

app.listen(8084);
console.log('网站启动成功!');