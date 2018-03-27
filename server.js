require('./server/config');
const express = require('express');
const dotenv = require('dotenv');
const app = express();
const services = require('./server/services');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.listen(port);

setInterval(services.intervalFunc, 1500);
setInterval(services.clearDatabase)

module.exports = app;
