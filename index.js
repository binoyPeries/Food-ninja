const express = require('express');
const app = express();
const config = require('config');

require('./startup/routes')(app); 

const dotenv = require('dotenv');

dotenv.config({
    path: './config/config.env'
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));