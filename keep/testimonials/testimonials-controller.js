'use strict';

require('./_testimonials.scss');

module.exports = ['$log', '$location', '$rootScope', TestimonialsController];

function TestimonialsController($log, $location) {
  let url = $location.url();

};
