(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, wikiSearchService) {
    var vm = this;
    vm.articles = wikiSearchService.articles;
    vm.article = wikiSearchService.article;

    activate();

    function activate() {

    }

    vm.getArticles = function (searchString) {
      wikiSearchService.clearSearch();
      wikiSearchService.searchWiki(searchString);
    };
  }
})();
