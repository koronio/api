var express       = require('express');
var cors          = require('cors');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var expressValidator = require('express-validator');

// routes
var routes  = require('./routes/index');
var users   = require('./routes/users');
var auth    = require('./routes/auth');
var profile = require('./routes/profile');
var package = require('./routes/package');
var team    = require('./routes/team');

var app     = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//enable cors
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      message   : msg,
      value : value
    };
  }
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var apiPrefix = '/api/v1';
app.use(routes);
app.use(apiPrefix + '/auth', auth);
app.use(apiPrefix + '/profile', profile);
app.use(apiPrefix + '/users', users);
app.use(apiPrefix + '/packages', package);
app.use(apiPrefix + '/teams', team);

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
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
