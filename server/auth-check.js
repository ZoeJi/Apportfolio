const jwt = require('jsonwebtoken');
var mongoUtil = require( './mongoUtil' );
var db = mongoUtil.getDb();
const config = require('./config');
/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  console.log("auth-check", req.headers.authorization);
  if (!req.headers.authorization) {
    return res.status(401).end();
  }
  console.log("got herellllllllllllllll")
  // get the last part from a authorization header string like "bearer token-value"
  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();
  console.log(token)
  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }
    console.log(decoded.sub)
    const userId = decoded.sub;

    db.collection('m3users').find({'username': userId}).limit(1).toArray(function(err, result) {

      console.log("middleware result:", result)
      if(err){
        console.log(err)
        throw err;
      }
      else if(result.length > 0){
        return next();
      }
      else{
        return res.status(401).end();
      }
    });

  });
};
