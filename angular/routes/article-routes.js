module.exports = function(express, api, __dirname) {
	function ArticleRoutes() {}

	console.log('LOADED: ARTICLE ROUTES');

	var config       = require('../helpers/configHelper').config(),
		  errorHandler = require('../helpers/errorHandler.js') ;

	// GETs many articles at a time
	// GET /articles?startKey=
	ArticleRoutes.getArticles = function(req, res, next) {
		// getArticles()
		// .then(function (results) {
			// prompts = prompts.concat(results);
			// if (prompts.length === LIMIT + offset) {
				// res.status(200).json({docs: prompts});
		// })
		// .fail(function (err) {
			// errorHandler.logAndReturn('Error getting prompt docs', 500, next, req, err);
		// });
	};

	return ArticleRoutes;
};