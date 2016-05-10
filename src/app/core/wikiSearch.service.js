(function () {
  'use strict';
  angular.module('app.core')
    .factory('wikiSearchService', wikiSearchService);

  function wikiSearchService($http, $log) {
    var article = {
      title: 'this is a snippet',
      extract: '',
      url: ''
    }
    var articles = [];

    var service = {
      searchWiki: searchWiki,
      article: article,
      articles: articles
    };

    return service;

    function searchWiki(searchString) {
      var page = 'https://en.wikipedia.org/?curid=';

      return $http.jsonp('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + searchString + '&callback=JSON_CALLBACK')
        .success(function (data) {
          var results = data.query.pages;
          angular.forEach(results, function (record, thingy) {
            articles.push({
              title: record.title,
              extract: record.extract,
              url: page + record.pageid
            });
          })
        });
    }
  }
})();
