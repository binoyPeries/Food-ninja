const router = require('express').Router();
const menu = require('./menu');

router.use('/menu',menu);

router.use('/login', require('./login'));

module.exports = router