'use strict';

require('./_services.scss');

module.exports = ['$log', '$location', '$rootScope', AboutController];

function AboutController($log, $location) {
  let url = $location.url();

};
