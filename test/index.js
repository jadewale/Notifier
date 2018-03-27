process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Users = require('../server/models/users');
const UsersController = require('../server/controllers/users');

describe('Books', () => {
  beforeEach((done) => { // Before each test we empty the database
    Users.remove({}, (err) => {
      done();
    });
  });

  /*
    * Test the Add Users
    */
  describe('/Add Users', () => {
    it('Should Test add users', (done) => {
      const userData = {
        token: 'IEDHFGKKSHS',
        email: 'jbadewale@yahoo.com',
        phoneNumber: '09097438705',
      };

      UsersController.postUser(userData).then(((response) => {
        response.body.length.should.be.eql(1);
        done();
      }));
    });
  });

  /*
   * Test the get Users
   */
  describe('/Get Users', () => {
    it('Should Test get users', (done) => {
      const userData = {
        email: 'jbadewale@yahoo.com',
        time: '2018-10-03',
      };

      UsersController.getUser(userData).then(((response) => {
        response.body.length.should.be.eql(1);
        done();
      }));
    });
  });
});
