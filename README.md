# Document Management System
[![Build Status](https://travis-ci.org/jadewale/license-plate.svg?branch=master)](https://travis-ci.org/jadewale/license-plate)[![Maintainability](https://api.codeclimate.com/v1/badges/f7b6527c53e8f3cc2484/maintainability)](https://codeclimate.com/github/jadewale/license-plate/maintainability)    [![Test Coverage](https://api.codeclimate.com/v1/badges/f7b6527c53e8f3cc2484/test_coverage)](https://codeclimate.com/github/jadewale/license-plate/test_coverage)


License is a cron job which helps check a field on firebase and sends a notification to the user as push notification and also an sms every 6 hours. It was used here as a plate number notification api

Development
-----------
This application is created using Nodejs environment. It implements [**Express**](http://expressjs.com/) as the routing framework and [**Mongoose**](http://mongoosejs.com/), an object modeling package, to interact with MongoDB. [**Firebase**](https://firebase.google.com/) is used to get user information and user token and also sends a push notification. [**Twillo**](https://twilio.com/) is used to send sms to International Numbers.
[**Jusibe**](https://jusibe.com/) also used to send SMS to local Numbers (+234) . If The application sms fails for a local number, it uses Twillo to send an sms.


Installation.
-------------
1. Install [**Nodejs**](www.nodejs.org) and [**MongoDB**](www.mongodb.org)
2. Clone this repo or download the zipped file.
3. Navigate to the master branch.
4. Run
    ```
    npm install or yarn

    ```
    This will install the required dependencies.

5. Run
  ```
  npm test

  ```
  to run the tests.
7. Run
  ```
  npm start

  ```
  Use [**Postman**](https://www.getpostman.com/) to consume the API.
8. Well...enjoy.

## Code Example

**Create a new user**
```
POST - /api/v1/users

Post data
{
  username: 'username',
  email: 'example@host.com'
  lastname: 'lastname',
  firstname: 'firstname',
  password: 'password',
  role: 'Administrator' // Role has to be created before assignment. 
}
```

**********

**Login a user**
```
POST - /api/v1/users

Post data
{
  username: 'username',
  password: 'password'
}
```

**********

**Create a new document**

Documnent is created by an existing and authenticated user.

```
POST - /api/v1/users

Post data
{
  title: 'Documnent title',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

}
```

***********

**Create a new role 

Role is created by an Authorized and Authenticated user.

```
POST - /api/v1/role

Post data
{
  role: 'Test'
}
```

**********

## API Reference

API endpoints currently supported.

_*Users*_

Request type | Endpoint | Action 
------------ | -------- | ------
POST | /api/v1/users | Create a new user
GET | /api/v1/users | Get all users
GET | /api/v1/users:id | Get a user
PUT | /api/v1/users/:id | Update user information
DELETE | /api/v1/users/:id | Remove a user from database

_*Documents*_

Request type | Endpoint | Action 
------------ | -------- | ------ 
POST | /api/v1/documents | Create a new document
GET | /api/v1/documents | Retrieve all documents 
GET | /api/v1/documents/:id | Retrieve a specific document
GET | /api/v1/users/:id/documents | Retrieve all documents created by a user
GET | /api/v1/documents/?role=Andela | Retrieve all documents that contains 'Andela'
GET | /api/v1/documents/q=Andela&limit=10 | Retrieve documents that contains 'Andela' in group of tens 
GET | /api/v1/documents/?q=Andela&role=Test | Retrieve documents that contains 'Andela' with Test access
PUT | /api/v1/documents/:id | Update a specific document
DELETE | /api/v1/documents/:id | Remove a specific document from storage


_*Roles*_

Request type | Endpoint | Action 
------------ | -------- | ------ 
POST | /api/v1/role | Create a new role 
GET | /api/v1/role | Retrieve all roles 
PUT | /api/v1/role/:id | Edit a role
GET | /api/v1/role/:id | Retrieve a role
DELETE | /api/v1/role/:id | Delete a role




Testing.
--------
This application has been tested using [**Mocha**](https://mochajs.org), which is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun.

Thank You.

#### Adewale Jolaade |
 
