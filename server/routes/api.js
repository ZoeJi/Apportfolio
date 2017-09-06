var express = require('express');
var router = express.Router();
const searchitunes = require('searchitunes');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/dashboard', (req, res, next)=>{
  console.log("hereeeeeeeee")
  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  var decoded = jwt.verify(token, config.jwtSecret);
  const username = decoded.sub;
  const result = {
    username: username
  }
  res.send(result)
});

/* return search results */
router.get('/search/:keyword' , function(req, res, next) {

  const searchParams = {
    entity: 'software',
    country: 'US',
    term: req.params.keyword,
    limit: 12,
  }

  searchitunes(searchParams, (err, data) => {
    if (err) {
      console.log ("search err");
      return;
    }
    res.send(data);
  })
});

/* return single app search by ID */
router.get('/app/:id', function(req, res, next) {

  searchitunes({id: req.params.id}, (err, data) => {
    if (err) {
      console.log ("app id %d not found err", req.params.id);
      return;
    }
    res.send(data)
  })

});

/* add course ID and username to database */
router.post('/add-tag', function(req, res, next) {

  var mongoUtil = require( '../mongoUtil' );
  var db = mongoUtil.getDb();

  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  /* get username from token */
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    console.log(decoded.sub)
    const userId = decoded.sub;
    const appDocument = {
      username: userId.trim(),
      appId: req.body.appId,
      tag: req.body.tag
    };

    db.collection('apps').save(appDocument);
    res.send("success")

  });
});

/* get all tags for this app */
router.post('/get-tags', function(req, res, next) {

  var mongoUtil = require( '../mongoUtil' );
  var db = mongoUtil.getDb();

  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  /* get username from token */
  var decoded = jwt.verify(token, config.jwtSecret);
  console.log("decoded", decoded.sub)
  const userId = decoded.sub;

  const appDocument = {
     username: userId.trim(),
     appId: req.body.appId
   };

   db.collection('apps').find(
     { "appId": req.body.appId,
       "username": userId.trim() },
     { "tag": 1 }
     ).toArray(function(err, result) {
     if (err){
       console.log("error ")
       return err;
     }
     if (result.length > 0) {
       var resultJson = {};
       var i = 0;
       result.forEach(function(val){
         resultJson[i++] = val
       })
       console.log("db result", resultJson)
       res.send(resultJson)
     } else {
       return null
     }
   });
});

/* delete tags for this app */
router.post('/delete-tag', function(req, res, next) {

  var mongoUtil = require( '../mongoUtil' );
  var db = mongoUtil.getDb();

  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  /* get username from token */
  var decoded = jwt.verify(token, config.jwtSecret);
  console.log("decoded delete", decoded.sub)
  const userId = decoded.sub;

  console.log("deleting", req.body.appId)
  console.log("deleting", req.body.tag)

  db.collection('apps').remove(
    { "appId": req.body.appId,
      "username": userId.trim(),
      "tag": req.body.tag }
    )

  res.send("success")
});

/* get all apps with this tag */
router.post('/get-apps', function(req, res, next) {

  var mongoUtil = require( '../mongoUtil' );
  var db = mongoUtil.getDb();

  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  /* get username from token */
  var decoded = jwt.verify(token, config.jwtSecret);
  console.log("decoded", decoded.sub)
  const userId = decoded.sub;

  const result = db.collection('apps').distinct(
    "appId",
    {
      "tag": req.body.tag,
      "username": userId.trim()
    })

  if (result.length > 0) {
    res.send(result)
  } else {
    return null
  }
});


router.get('/get-all-apps', function(req, res, next) {

  var mongoUtil = require( '../mongoUtil' );
  var db = mongoUtil.getDb();

  var token = req.headers.authorization.split(' ')[1].trim();
  token = token.trim();

  /* get username from token */
  var decoded = jwt.verify(token, config.jwtSecret);
  console.log("decoded", decoded.sub)
  const userId = decoded.sub;

   db.collection('apps').find(
     { "username": userId.trim() }
     ).toArray(function(err, result) {
     if (err){
       console.log("error ")
       return err;
     }
     if (result.length > 0) {
       var resultJson = {};
       var i = 0;
       result.forEach(function(val){
         resultJson[i++] = val
       })
       console.log("getallappsresult", resultJson)
       res.send(resultJson)
     } else {
       return null
     }
   });
});


module.exports = router;
