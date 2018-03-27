require('./server/config');
const dotenv = require('dotenv').load();
const express = require('express');
const app = express();
const services = require('./server/services');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.listen(port);
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to The Job!' }));

setInterval(services.intervalFunc, 1500);
setInterval(services.clearDatabase, (60000 * 360));
services.clearDatabase();


module.exports = app;
