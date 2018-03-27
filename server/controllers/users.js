const User = require('../models/users');

function postUser(users) {
  const newUser = new User(users);

  return new Promise((resolve, reject) => {
    newUser.save((err, user) => {
      if (err) {
        reject(err);
      }
      resolve(user);
    });
  });
}

function getUser({ data: { email }, time }) {
  return new Promise((resolve, reject) => {
    User.find({
      $and: [{ email },
        { createdAt: { $lt: time } }],
    }, (err, docs) => {
      if (err) {
        reject(err);
      }
      // If no errors, send it back to the client
      resolve(docs);
    });
  });
}

function removeUsers() {
  return new Promise((resolve, reject) => {
    User.remove({}, (err, result) => {
      if (err) { reject(err); }

      resolve(result);
    });
  });
}

module.exports = {
  getUser, postUser, removeUsers,
};
