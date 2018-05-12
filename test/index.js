process.env.NODE_ENV = 'test';


const mongoose = require('mongoose');
const server = require('../server');
const Users = require('../server/models/users');
const chai = require('chai');
const UsersController = require('../server/controllers/users');
const Service = require('../server/services');
const expect = chai.expect;
const should = chai.should();

describe('Users Cron Job', () => {
  beforeEach((done) => { // Before each test we empty the database
    Users.remove({}, (err) => {
      done();
    });
  });

  /*
    * Test the Add Users
    */
  describe('/Add Users', () => {
    it('Should Test add user adds a user to the database', (done) => {
      const userData = {
        token: 'IEDHFGKKSHS',
        email: 'jbadewale@yahoo.com',
        phoneNumber: '09097438705',
      };

      UsersController.postUser(userData).then(((response) => {
        expect(response).to.have.property('email');
        done();
      }));
    });
  });

  /*
   * Test the get Users
   */
  describe('/Get Users', () => {
    it('Should Test get user retrieves a user from the database', (done) => {
      const userData = {
        data: {
          email: 'jbadewale@yahoo.com',
        },
        time: '2018-10-03',
      };

      UsersController.postUser({
        token: 'IEDHFGKKSHS',
        email: 'jbadewale@yahoo.com',
        phoneNumber: '09097438705',
      }).then(((response) => {
        expect(response).to.have.property('email');
        UsersController.getUser(userData).then(((resp) => {
          resp[0].email.should.be.eql(userData.data.email);
          done();
        }));
      }));
    });
  });

  describe('/Update License Expired', () => {
    it('Should test push notification was sent to the user and database was updated', (done) => {
      Service.createUser({
        token: 'IEDHFGKKSHS',
        email: 'jbadewale@yahoo.com',
        phoneNumber: '+2349097438705',
      }).then((res) => {
        Service.fetchUserData().then((resp) => {
          resp.forEach((doc) => {
            expect(doc.data().licenseMessage).to.equal('Expired !!!');
          });
          done();
        });
      });
    });
  });
});
