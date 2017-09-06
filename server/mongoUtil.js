var MongoClient = require('mongodb').MongoClient;
var mongoURI = 'mongodb://ec2-54-175-174-41.compute-1.amazonaws.com:20/'
var db_name = "module2"
var db_user = "lamxx204"
var db_pswd = "melissa"
var x500 = "lamxx204" // <-- Replace this with your x500
var _db;

module.exports = {
  connectToServer: function(callback) {
    MongoClient.connect(mongoURI + db_name, function(err, db){
      _db = db;

        db.authenticate(db_user, db_pswd, function(err, result) {
          return callback(err);
        });
    });
  },

  getDb: function(){
    return _db;
  }
};
