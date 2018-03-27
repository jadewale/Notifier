process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Users = require('../server/models/users');

describe('Books', () => {
  beforeEach((done) => { // Before each test we empty the database
    Users.remove({}, (err) => {
      done();
    });
  });
});
