(function() {
  'use strict';

  angular
    .module('fccWikipedia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
