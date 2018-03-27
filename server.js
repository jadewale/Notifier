const express = require('express');
const dotenv = require('dotenv');
const app = express();
require('./server/config');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;
