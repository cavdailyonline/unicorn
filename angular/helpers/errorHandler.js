var bunyan = require('bunyan');
var path   = require('path');
var config = require('./configHelper').config();
var logPath = path.join(__dirname, '../logs/dev-error.log');

if (config.ENV == 'PROD') {
  logPath = path.join(__dirname, '../logs/prod-error.log');
}

var logger = bunyan.createLogger({
  name: 'CavalierDaily',
  streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'info',
      path: logPath  // log INFO and above to a file
    }
  ]
});

exports.logValidationAndReturn = function(validationErrors, status, next, req) {
  var errObj = new Error(validationErrors[0].msg || 'Unknown validation error');
  Object.assign(errObj, validationErrors);
  errObj.status = status;
  var data = '';
  if (req) {
    data = 'REQ BODY: ' + JSON.stringify(req.body, null, 2) + ' , REQ PARAMS: ' + JSON.stringify(req.params, null, 2) + ' , REQ USER: ' + JSON.stringify(req.user, null, 2);
  }
  if (config.LOG_ERRORS == 'true' && status != 404) {
    logger.error(errObj || message || 'Unknown validation error', '| data: ' + data);
  } else {
    logger.info(errObj || message || 'Unknown validation error', '| data: ' + data);
  }
  return next(errObj);
};

exports.logAndReturn = function(message, status, next, req, err) {
	var errObj = err || new Error(message || 'Unknown server error');
	errObj.status = status;
  var data = '';
  if (req) {
    data = 'REQ BODY: ' + JSON.stringify(req.body, null, 2) + ' , REQ PARAMS: ' + JSON.stringify(req.params, null, 2) + ' , REQ USER: ' + JSON.stringify(req.user, null, 2);
  }
	if (config.LOG_ERRORS == 'true' && status != 404) {
		logger.error(errObj || message || 'Unknown server error', '| data: ' + data);
	} else {
		logger.info(errObj || message || 'Unknown server error', '| data: ' + data);
	}
	return next(errObj);
};

exports.logServerError = function(err) {
  if (config.LOG_ERRORS == 'true') {
    logger.error(err);
  } else {
    logger.info(err);
  }
};