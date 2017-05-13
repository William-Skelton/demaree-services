'use strict';

require('./_rates.scss');

module.exports = ['$log', '$location', '$rootScope', RatesController];

function RatesController($log, $location) {
  let url = $location.url();

};
