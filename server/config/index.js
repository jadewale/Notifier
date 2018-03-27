
/*
  Set up mongo Instance
 */
const mongoose = require('mongoose');
const options = {
  poolSize: 5, reconnectTries: 5, keepAlive: 1, connectTimeoutMS: 30000,
};

const uri = 'mongodb://localhost/books' || 'mongodb://heroku_fqr9bc2w:g6bn4l78uoflchnuodveem03iq@ds129796.mlab.com:29796/heroku_fqr9bc2w' || 'mongodb://localhost/books';

mongoose.connect(uri, options);

mongoose.connection.on('connected here ', () => {
  console.log('Default connection opened');
});

mongoose.connection.on('error', (err) => {
  console.log(`Default connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Default connection disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Default connection closed');
    process.exit(0);
  });
});
