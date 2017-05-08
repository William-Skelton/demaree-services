'use strict';

require('./_blog.scss');

module.exports = ['$log', '$location', '$rootScope', BlogController];

function BlogController($log, $location) {
  let url = $location.url();

};
