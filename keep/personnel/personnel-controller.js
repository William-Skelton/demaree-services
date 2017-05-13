'use strict';

require('./_personnel.scss');

module.exports = ['$log', '$location', '$rootScope', PersonnelController];

function PersonnelController($log, $location) {
  let url = $location.url();

};
