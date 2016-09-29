module.exports = function(express, api, __dirname) {
  "use strict";

  var article	= require('./article-routes')(express, api, __dirname);
  var config  = require('../helpers/configHelper').config() ;


  // IF YOU HAVE QUESTIONS WRITING A ROUTE AND RETURNING A STATUS CODE REFER HERE:
  // http://www.restapitutorial.com/lessons/httpmethods.html

  var apiVersion = '/api/v0';

  // GET /appjs
  var appjs = function(req, res) {
    if (config.ENV == "DEV") {
        res.sendFile('public/comapp.js', { root: __dirname });
    } else {
        res.sendFile('public/comapp.min.js', { root: __dirname });
    }
  };

  // GET /addons
  var addons = function(req, res) {
    if (config.ENV == "DEV") {
        res.sendFile('public/addons.js', { root: __dirname });
    } else {
        res.sendFile('public/addons.min.js', { root: __dirname });
    }
  };

  // GET /appcss
  var appcss = function(req, res) {
    if (config.ENV == "DEV") {
        res.sendFile('public/app.css', { root: __dirname });
    } else {
        res.sendFile('public/app.min.css', { root: __dirname });
    }
  };

  // GET /
  var home = function(req, res) {
      res.sendFile('public/main.html', { root: __dirname });
  };

  // APP ROUTES
  // GET /////////////////////////////////////////////////////////////
  api.get('/', home);
  api.get('/index', home);
  api.get('/appjs', appjs);
  api.get('/addons', addons);
  api.get('/appcss', appcss);
  // POST ////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////

	// ARTICLE GETS

  // FALLBACK
  api.get('/*', home); // handler for all other routes (will go to 404)

  // MIDDLEWARE //////////////////////////////////////////////////////
    // Comment out this block to pipe JS errors straight through to client (useful for debugging).
  api.use(function (err, req, res, next) {
    console.log('ERROR ON SERVER', JSON.stringify(err), res.status);
    res.status(err.status || 500).json({error: true, message:err.message || err.body || 'Unknown server error'});
  });
};
