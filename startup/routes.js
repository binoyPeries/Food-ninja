const express = require('express');
const routes = require('../routes');
const path = require('path');

module.exports = function (app) {

    app.use(express.json());
    
    app.use(express.urlencoded({ extended: true }));

    app.set('views', path.join(__dirname, '../views'));

    //view engine setup
    app.set('view engine', 'ejs');
    app.engine('html',require('ejs').renderFile);


    app.use('/', routes);
}