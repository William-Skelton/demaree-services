'use strict';

require('./_services.scss');

module.exports = ['$log', '$location', '$rootScope', ServicesController];

function ServicesController($log, $location) {
  let url = $location.url();

};
