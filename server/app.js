var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var routes = require('./routes/index');
var api = require('./routes/api');
var auth = require('./routes/auth');
var mongoUtil = require( './mongoUtil' );
var app = express();

mongoUtil.connectToServer( function( err ) {
  // start the rest of your app here


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authorization checker middleware
const authCheckMiddleware = require('./auth-check');
app.use('/api', authCheckMiddleware);

// app.use('/', routes);
app.use('/api', api);
app.use('/auth', auth);

var reactBase = path.resolve(__dirname, '../client/build')
if (!fs.existsSync(reactBase)) {
  throw 'TODO, need to `npm run build` in client dir'
}
app.use('/static', express.static(path.join(reactBase, 'static')));
// app.use(express.static(reactBase));
var indexFile = path.join(reactBase, 'index.html')
app.use(function(req, res, next) {
  // TODO - catch errors http://expressjs.com/en/api.html#res.sendFile
  res.sendFile(indexFile);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});

} );
module.exports = app;
