'use strict';

require('./_about.scss');

module.exports = ['$log', '$location', '$rootScope', AboutController];

function AboutController($log, $location) {
  let url = $location.url();

};
