// REQUIREMENTS
var bodyParser       = require('body-parser');
var express          = require('express');
var expressValidator = require('express-validator'); //uses node-validator functions
var errorHandler     = require('errorhandler');
var logger           = require('morgan');
var path             = require('path');
var config           = require('./helpers/configHelper').config() ;

// START APP
var app              = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, '/public')));

// development only
if ('development' == config.env) {
  console.info('USING DEV API');
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));
}

// production online
else if ('production' == config.env) {
  // var enforce = require('express-sslify');
  // // use HTTPS(true) in case you are behind a load balancer (e.g. Heroku)
  // app.use(enforce.HTTPS(true));
  app.use(errorHandler());
}

app.set('port', config.port || 5000);

var server = app.listen(app.get('port'), function() {
  console.info('RUNNING ON PORT ' + server.address().port);
});

// roll tide go hokies
require('./routes/routes-v0')(express, app, __dirname);

module.exports = app;