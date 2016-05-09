(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;

    vm.awesomeThings = [];

    activate();

    function activate() {

    }

    function getArticles(searchString) {

    }
  }
})();
