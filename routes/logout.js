const routes = require('express').Router();
const { logout } = require('../controller/logout');

routes.post('/', logout);


module.exports = routes;
