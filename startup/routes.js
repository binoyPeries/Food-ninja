const express = require('express');
const routes = require('../routes');
const path = require('path');

module.exports = function (app) {

    app.use(express.json());
    
    app.use(express.urlencoded({ extended: true }));

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    app.use('/', routes);
}