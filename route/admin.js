const express = require('express');
const multer = require('multer');

const admin = express.Router();
const upload = multer({dest: '/public/uploadimg'});

admin.get('/login', require('./admin/loginPage.js'));

admin.post('/login', require('./admin/login.js'));

admin.get('/manager', require('./admin/manager.js'));

admin.get('/manager/manage', require('./admin/managePage'));

admin.get('/manager/artlistpage', require('./admin/articleListPage'));

admin.get('/manager/artupdatepage', require('./admin/articleUpdatePage'));

admin.get('/manager/artaddpage', require('./admin/articleAddPage'));

admin.post('/manager/artadd', upload.single('uploadimg'), require('./admin/articleAdd'));

admin.post('/manager/artupdate', require('./admin/articleUpdate'));

admin.get('/manager/artdel', require('./admin/artDel'));

admin.get('/manager/allart', require('./admin/getAllArt'));

admin.get('/manager/getdealart', require('./admin/getDealArt'));

admin.get('/manager/logout', require('./admin/logOut'));

module.exports = admin;