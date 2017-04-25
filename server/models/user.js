const crypto = require('crypto');
const utils = require('../lib/hashUtils');
const Model = require('./model');
const db = require('../db');
// Write you user database model methods here
class Users extends Model {
  constructor(){
    super('users');
  }

  // insertUser(usrname, pw) {
  //   //console.log("usrname, pw: ", usrname, " ", pw);
  //   db.query('INSERT into users (username, password) values ( \''+ usrname +'\',\'' + pw + ' \');');
  // }

  create(user) {
    let shasum = crypto.createHash('sha1');
    shasum.update(user.password);
    user.password = shasum.digest('hex').slice(0, 5);

    console.log('password', user.password)
    return super.create.call(this, user);
  }

  // doesUserExist(usrname) {

  //   db.query(`SELECT * FROM users WHERE username = "` + usrname + `";`, function (err, rows) {
  //     if(err) {
  //       throw err;
  //     } else {
  //       console.log(rows);
  //     }
  //   } );

  //   console.log("******", test.values, "*****")
    //console.log('user from does user exists ', user)
    // if (test) {
    //   return true;
    // } else {
    //   return false;
    // }
  
}

module.exports = new Users();