const express = require('express');

const home = express.Router();

home.get('/', require('./home/index.js'));

home.get('/logshow', require('./home/logShowPage.js'));

home.get('/contentlist', require('./home/getConList.js'));

home.get('/specificart', require('./home/getOneArt.js'))

home.post('/comment', require('./home/comment.js'));

home.get('/commentlist', require('./home/getComList.js'));

module.exports = home;