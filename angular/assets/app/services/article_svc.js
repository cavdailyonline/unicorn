appServices.service("articleService", ['$http', function ($http) {

    // Caches
    this.articlesById = {};

    // Get methods
	this.getArticles = function(retro, callback) {
	$http({method: 'GET', url: '/articles/options/' + id})
		.success((function(data, status, headers, config) {
			var articles = data.doc;
            for(var i in articles) {
                var article = articles[i];
                this.articlesById[article.id] = article;
            }
			callback(null, articles);
		}).bind(this))
		.error(function(data, status, headers, config) {
			$log.debug("failed to get articles", data);
			callback(data.message);
		});
	};

}]);