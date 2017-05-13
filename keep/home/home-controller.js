'use strict';

require('./_home.scss');

module.exports = ['$log', '$location', '$rootScope', HomeController];

function HomeController($log, $location) {
  let url = $location.url();

};
