const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();
const config = require('../config');

module.exports = new PassportLocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, username, password, done) =>{
  const userData = {
    username: username.trim(),
    password: password.trim()
  };

  // console.log(username)
  db.collection('m3users').find(userData).limit(1).toArray(function(err, result) {
    console.log("db okay")
    console.log(result)
    if(err){
      console.log("I got err haha")
      return done(err);
    }
    if(result.length > 0){
      console.log("Match, success")
      console.log("resultid", result[0]._id);
      const payload = {
        sub: result[0].username
      }

      console.log("payload", payload);
      // create token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: username
      }

      return done(null, token, data);
    }
    else{
      console.log("Not match, error")
      const error = new Error('Incorrect username or password');
      error.name = 'IncorrectCredentialsError';
      return done(error);
    }
  });
});
