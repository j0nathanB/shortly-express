const utils = require('../lib/hashUtils');
const Model = require('./model');
const db = require('../db');
// Write you user database model methods here
class Users extends Model {
  constructor(){
    super('users');
  }

  insertUser(usrname, pw) {
    console.log("usrname, pw: ", usrname, " ", pw);
    db.query('INSERT into users (username, password) values ( \''+ usrname +'\',\'' + pw + ' \');');
  }

  create(user) {
    return super.create.call(this, user);
  }
}

module.exports = new Users();