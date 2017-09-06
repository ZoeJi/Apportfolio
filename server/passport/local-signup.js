const PassportLocalStrategy = require('passport-local').Strategy;
var mongoUtil = require( '../mongoUtil' );
var db = mongoUtil.getDb();

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
  db.collection('m3users').find({'username': username}).limit(1).toArray(function(err, result) {
    console.log("db okay")
    console.log(result)
    if(err){
      console.log("I got err haha")
      return done(err);
    }
    if(result.length > 0){
      console.log("Have dublicate, errors")
      err = "This username is already taken."
      return done(err);
    }
    else{
      console.log("No dublicate, success")
      db.collection('m3users').save(userData);
      return done(null);
    }
  });
});
